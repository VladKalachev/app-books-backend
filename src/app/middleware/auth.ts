import type { NextFunction, Request, Response } from 'express';
import ApiError from '../globals/api-error';
import tokenService from '../service/token.service';

export default (request: any, responst: Response, next: NextFunction) => {
  try {
    const header = request.headers.authorization;

    if (!header) {
      next(ApiError.UnauthorizeError());
    }
    const accessToken = header.split(' ')[1];
    if (!accessToken) {
      next(ApiError.UnauthorizeError());
    }

    const userData = tokenService.validateAccessToken(accessToken);
    if (!userData) {
      next(ApiError.UnauthorizeError());
    }

    request.user = userData;

    next();
  } catch (e) {
    next(ApiError.UnauthorizeError());
  }
};
