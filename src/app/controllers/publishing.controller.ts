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
}

export default new PublishingController();
