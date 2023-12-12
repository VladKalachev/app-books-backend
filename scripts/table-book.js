import 'dotenv/config'
import Book from "../src/app/models/book";

await Book.sync({ alter: true });
