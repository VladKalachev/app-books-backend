import type { NextFunction, Request, Response } from 'express';

class GoalsController {
  async all(req: Request, res: Response, next: NextFunction) {}

  async create(req: Request, res: Response, next: NextFunction) {}

  async one(req: Request, res: Response, next: NextFunction) {}

  async remove(req: Request, res: Response, next: NextFunction) {}

  async update(req: Request, res: Response, next: NextFunction) {}
}

export default new GoalsController();
