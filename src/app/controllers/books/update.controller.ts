import Book from '../../models/book';
import { type Request, type Response } from 'express';

export default async function bookUpdate(req: Request, res: Response) {
  const fromId = parseInt(req.params.id ?? '0');

  const book = await Book.findOne({
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
