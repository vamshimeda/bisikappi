import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'http';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

let wss: WebSocketServer | null = null;
const clients = new Set<WebSocket>();

/** Attaches the realtime WebSocket server at ws(s)://host/ws. */
export function initRealtime(server: Server) {
  wss = new WebSocketServer({ server, path: '/ws' });
  wss.on('connection', (socket, req) => {
    // Optional ?token=... so we can scope broadcasts by role later if needed.
    try {
      const url = new URL(req.url || '', 'http://localhost');
      const token = url.searchParams.get('token');
      if (token) jwt.verify(token, JWT_SECRET);
    } catch {
      // Anonymous/invalid token: still allow the connection for public feeds
      // (e.g. a kiosk menu board) but broadcasts stay unscoped for now.
    }
    clients.add(socket);
    socket.on('close', () => clients.delete(socket));
  });
  return wss;
}

/** Broadcasts a typed event to every connected client.
 *  Frontend equivalent of bk-data.js's pub/sub `emit()`. */
export function broadcast(type: string, payload: unknown) {
  const msg = JSON.stringify({ type, payload, ts: new Date().toISOString() });
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) client.send(msg);
  }
}
