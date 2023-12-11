import { Op } from 'sequelize'
import Book from "#app/models/book.js";

export default async function bookOne(request, response){
  const fromId = parseInt(request.params.id ?? '0');

  const book = await Book.findOne({
    where: {
      id: fromId
    }
  });

  response.json(book);
}