import { type Request, type Response } from 'express';

export default function check(req: Request, res: Response) {
  res.end('Auth checkContoller controller');
}
