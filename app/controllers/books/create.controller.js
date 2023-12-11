import Book from "#app/models/book.js";

export default async function bookCreate(request, response){
  const { title } = request.body;
  console.log(request.body)
  // const books = await Book.create({ title });
  // response.end(JSON.stringify(books));
  response.end('bookCreate')
}