import Book from "../../models/book";
import {Request, Response} from "express";

export default async function bookCreate(req: Request, res: Response){
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
    buy
  } = req.body;

  const books = await Book.create({
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
    buy
  });
  res.end(JSON.stringify(books));
}