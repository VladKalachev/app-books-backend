import Book from "#app/models/book.js";

export default async function booksAll(request, response){
  const books = await Book.findAll();
  response.json(books);
}