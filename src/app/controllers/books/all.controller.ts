import { type Request, type Response } from 'express';
import { bookService } from '../../services/book.service';

export default async function booksAll(_: Request, res: Response) {
  try {
    const books = await bookService.all();
    res.json(books);
  } catch (e) {
    res.json(e);
  }
}
