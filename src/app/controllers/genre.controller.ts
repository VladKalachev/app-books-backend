import type { NextFunction, Request, Response } from 'express';
import GenreService from '../service/genre.service';

class GenreController {
  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const genres = await GenreService.all();
      res.json(genres);
    } catch (e) {
      next(e);
    }
  }
}

export default new GenreController();
