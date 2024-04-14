import type { NextFunction, Request, Response } from 'express';
import GoalService from '../service/goal.service';
import type { IGoal } from '../types/goal.interface';
import BookService from '../service/book.service';
import TokenService from '../service/token.service';
import ApiError from '../globals/api-error';

class GoalsController {
  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies;
      const query = req.query;

      const userData: any = TokenService.validateRefreshToken(refreshToken);
      if (!userData) {
        throw ApiError.UnauthorizeError();
      }
      const goals = await GoalService.getAllGoalsByUserId(userData.id, query);
      res.json(goals);
    } catch (e) {
      next(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, completed, BookId, currentPages = 0 }: IGoal = req.body;

      const { refreshToken } = req.cookies;
      const userData: any = TokenService.validateRefreshToken(refreshToken);
      if (!userData) {
        throw ApiError.UnauthorizeError();
      }

      const book = await BookService.one(BookId);

      let read = false;
      let numberPages = 0;

      if (book !== null) {
        read = book.read;
        numberPages = book?.numberPages;
      } else {
        read = completed;
      }

      const goal = await GoalService.create({
        title,
        completed: read,
        BookId,
        UserId: userData.id,
        currentPages,
        numberPages,
      });
      res.end(JSON.stringify(goal));
    } catch (e) {
      next(e);
    }
  }

  async one(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const goal = await GoalService.one(fromId);
      res.json(goal);
    } catch (e) {
      next(e);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      await GoalService.remove(fromId);
      res.end(JSON.stringify(true));
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const { title, completed, BookId, currentPages }: IGoal = req.body;
      const goal = await GoalService.update(fromId, title, completed, BookId, currentPages);
      res.end(JSON.stringify(goal));
    } catch (e) {
      next(e);
    }
  }

  async completed(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const { completed }: IGoal = req.body;
      const goal = await GoalService.completed(fromId, completed);
      res.end(JSON.stringify(goal));
    } catch (e) {
      next(e);
    }
  }
}

export default new GoalsController();
