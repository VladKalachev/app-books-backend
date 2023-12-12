import { Request, Response } from 'express';

export default function check(req: Request, res: Response){
	res.end('Auth check controller');
}