import Book from "#app/models/book.js";

export default async function bookRemove(request, response){
  const fromId = parseInt(request.params.id ?? '0');

  const book = await Book.findOne({
    where: {
      id: fromId
    }
  });

  await book.destroy();
  response.end(JSON.stringify(true));
}