import type { Request, Response, NextFunction } from 'express';
import userService from '../service/user.service';
import { validationResult } from 'express-validator';
import ApiError from '../globals/api-error';
class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
        return;
      }
      const { email, password } = req.body;
      console.log('req.body', req.body);
      const userData = await userService.registration(email as string, password as string);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('logout');
      res.end(true);
    } catch (e) {
      next(e);
    }
  }

  async activate(req: Request, res: Response, next: NextFunction) {
    try {
      const activationLink = req.params.link;
      await userService.activete(activationLink);
      res.redirect(process?.env?.CLIENT_URL || '');
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      console.log('refresh');
      res.end(true);
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      res.json([1, 2, 3]);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
