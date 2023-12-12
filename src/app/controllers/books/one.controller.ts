import Book from "../../models/book";
import {Request, Response} from "express";

export default async function bookOne(req: Request, res: Response){
  const fromId = parseInt(req.params.id ?? '0');

  const book = await Book.findOne({
    where: {
      id: fromId
    }
  });

  res.json(book);
}