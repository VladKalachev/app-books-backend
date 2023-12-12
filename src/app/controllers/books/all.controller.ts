import Book from "../../models/book";

import {Request, Response} from "express";

export default async function booksAll(req: Request, res: Response){
  const books = await Book.findAll();
  res.json(books);
}