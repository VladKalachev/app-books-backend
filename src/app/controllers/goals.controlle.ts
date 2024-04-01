import type { NextFunction, Request, Response } from 'express';
import GoalService from '../service/goal.service';

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

  async create(req: Request, res: Response, next: NextFunction) {}

  async one(req: Request, res: Response, next: NextFunction) {}

  async remove(req: Request, res: Response, next: NextFunction) {}

  async update(req: Request, res: Response, next: NextFunction) {}
}

export default new GoalsController();
