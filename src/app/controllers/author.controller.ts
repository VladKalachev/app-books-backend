import type { NextFunction, Request, Response } from 'express';

import AuthorService from '../service/author.service';
import AuthorDto from '../dtos/author.dto';
import AuthorModel from '../models/author.model';

class AuthorController {
  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const authors = await AuthorService.all();
      const authorsData = authors.map((author) => new AuthorDto(author));
      res.json(authorsData);
    } catch (e) {
      next(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { fullName } = req.body;
      const author = await AuthorService.create(fullName as string);
      res.end(JSON.stringify(author));
    } catch (e) {
      next(e);
    }
  }

  async one(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const author = await AuthorService.one(fromId);
      res.json(author);
    } catch (e) {
      next(e);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      await AuthorService.remove(fromId);
      res.end(JSON.stringify(true));
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const fromId = parseInt(req.params.id ?? '0');
      const { fullName } = req.body;
      const author = await AuthorService.update(fromId, fullName as string);
      res.end(JSON.stringify(author));
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthorController();
