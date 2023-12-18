import type { NextFunction, Request, Response } from 'express';
import ApiError from '../globals/api-error';

export default (err: any, request: Request, responst: Response, next: NextFunction) => {
  console.log(err);
  if (err instanceof ApiError) {
    return responst.status(err.status).json({ message: err.message, errors: err.errors });
  }
  return responst.status(500).json('Непредвиденная ошибка');
};
