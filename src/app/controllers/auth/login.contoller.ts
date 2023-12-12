import { type Request, type Response } from 'express';

export default function login(req: Request, res: Response) {
  console.log('loginContoller', req);
}
