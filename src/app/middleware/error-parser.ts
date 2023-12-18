import type { NextFunction, Request, Response } from 'express';
import ApiError from '../globals/api-error';

export default (err: any, request: Request, respons: Response, next: NextFunction) => {
  console.log(err);
  if (err instanceof ApiError) {
    return respons.status(err.status).json({ message: err.message, errors: err.errors });
  }
  return respons.status(500).json('Непредвиденная ошибка');
};
