import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

export interface AuthUser {
  sub: string;      // user id
  email: string;
  name: string;
  roleKey: string;
  apps: string[];   // app keys granted to this user's role
}

export function hashPassword(pw: string) {
  return bcrypt.hash(pw, 10);
}
export function verifyPassword(pw: string, hash: string) {
  return bcrypt.compare(pw, hash);
}

export function signToken(user: AuthUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

/** Verifies the bearer JWT and attaches req.user. 401s if missing/invalid. */
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Missing bearer token' });
  try {
    req.user = jwt.verify(token, JWT_SECRET) as AuthUser;
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

/** Enforces the same role -> app grant model as the Hub / Dev Portal Access tab. */
export function requireAppAccess(appKey: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
    if (!req.user.apps.includes(appKey)) {
      return res.status(403).json({ error: `Role "${req.user.roleKey}" is not granted "${appKey}"` });
    }
    next();
  };
}
