import type { NextFunction, Request, Response } from 'express';

import PublishingService from '../service/publishing.service';

class PublishingController {
  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const publishing = await PublishingService.all();
      res.json(publishing);
    } catch (e) {
      next(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;
      const publishing = await PublishingService.create(title as string);
      res.end(JSON.stringify(publishing));
    } catch (e) {
      next(e);
    }
  }

  async one(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const publishing = await PublishingService.one(fromId);
      res.json(publishing);
    } catch (e) {
      next(e);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      await PublishingService.remove(fromId);
      res.end(JSON.stringify(true));
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const { title } = req.body;
      const publishing = await PublishingService.update(fromId, title as string);
      res.end(JSON.stringify(publishing));
    } catch (e) {
      next(e);
    }
  }
}

export default new PublishingController();
