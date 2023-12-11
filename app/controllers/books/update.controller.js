import Book from "#app/models/book.js";

export default async function bookUpdate(request, response){
  const fromId = parseInt(request.params.id ?? '0');

  const book = await Book.findOne({
    where: {
      id: fromId
    }
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
    buy
  } = request.body;

  await book.update({
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

  response.end(JSON.stringify(book));
}