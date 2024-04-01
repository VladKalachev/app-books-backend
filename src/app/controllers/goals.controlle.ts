import type { NextFunction, Request, Response } from 'express';
import GoalService from '../service/goal.service';
import type { IGoal } from '../types/goal.interface';

class GoalsController {
  async all(req: Request, res: Response, next: NextFunction) {
    const query = req.query;
    try {
      const goals = await GoalService.all(query);
      res.json(goals);
    } catch (e) {
      next(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, completed }: IGoal = req.body;
      const goal = await GoalService.create(title, completed);
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
      const { title, completed }: IGoal = req.body;
      const goal = await GoalService.update(fromId, title, completed);
      res.end(JSON.stringify(goal));
    } catch (e) {
      next(e);
    }
  }
}

export default new GoalsController();
