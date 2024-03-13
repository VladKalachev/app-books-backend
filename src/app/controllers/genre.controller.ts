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

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body;
      const genre = await GenreService.create(title as string);
      res.end(JSON.stringify(genre));
    } catch (e) {
      next(e);
    }
  }

  async one(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const genre = await GenreService.one(fromId);
      res.json(genre);
    } catch (e) {
      next(e);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      await GenreService.remove(fromId);
      res.end(JSON.stringify(true));
    } catch (e) {
      next(e);
    }
  }
}

export default new GenreController();
