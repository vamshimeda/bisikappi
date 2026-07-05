import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

import { accessRouter } from './routes/access';
import { cafeRouter } from './routes/cafe';
import { integrationsRouter } from './routes/integrations';
import { opsRouter } from './routes/ops';
import { contentRouter } from './routes/content';
import { initRealtime } from './realtime';

const app = express();
const origins = (process.env.CORS_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
app.use(cors({ origin: origins.length ? origins : true, credentials: true }));
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.use('/api', accessRouter);
app.use('/api/cafe', cafeRouter);
app.use('/api/integrations', integrationsRouter);
app.use('/api/ops', opsRouter);
app.use('/api/content', contentRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const server = http.createServer(app);
initRealtime(server);

const port = Number(process.env.PORT) || 4000;
server.listen(port, () => {
  console.log(`Bisi Kaapi API listening on :${port} (WebSocket at /ws)`);
});
