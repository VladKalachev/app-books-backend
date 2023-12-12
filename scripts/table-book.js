import 'dotenv/config';
import BookModel from '../src/app/models/book.model';

await BookModel.sync({ alter: true });
