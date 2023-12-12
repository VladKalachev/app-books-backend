import type { Request, Response, NextFunction } from 'express';
import { bookService } from '../service/book.service';
import BookModel from '../models/book.model';

class BookController {
  async all(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await bookService.all();
      res.json(books);
    } catch (e) {
      res.json(e);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const {
      title,
      description,
      genre,
      fullName,
      image,
      year,
      numberPages,
      publishing,
      notes,
      read,
      buy,
    } = req.body;

    const books = await BookModel.create({
      title,
      description,
      genre,
      fullName,
      image,
      year,
      numberPages,
      publishing,
      notes,
      read,
      buy,
    });
    res.end(JSON.stringify(books));
  }

  async one(req: Request, res: Response, next: NextFunction) {
    const fromId = parseInt(req.params.id ?? '0');
    try {
      const book = await bookService.one(fromId);
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    const fromId = parseInt(req.params.id ?? '0');

    const book = await BookModel.findOne({
      where: {
        id: fromId,
      },
    });

    await book?.destroy();
    res.end(JSON.stringify(true));
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const fromId = parseInt(req.params.id ?? '0');

    const book = await BookModel.findOne({
      where: {
        id: fromId,
      },
    });

    const {
      title,
      description,
      genre,
      fullName,
      image,
      year,
      numberPages,
      publishing,
      notes,
      read,
      buy,
    } = req.body;

    await book?.update({
      title,
      description,
      genre,
      fullName,
      image,
      year,
      numberPages,
      publishing,
      notes,
      read,
      buy,
    });

    res.end(JSON.stringify(book));
  }
}

export default new BookController();
