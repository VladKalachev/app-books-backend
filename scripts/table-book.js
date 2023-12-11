import 'dotenv/config'
import Book from "#app/models/book.js";

await Book.sync({ alter: true });
