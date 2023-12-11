import Book from "#app/models/book.js";

export default async function bookCreate(request, response){
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
  } = request.body;

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
  response.end(JSON.stringify(books));
}