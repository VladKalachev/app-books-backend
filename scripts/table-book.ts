import 'dotenv/config';
import BookModel from '../src/app/models/book.model';

async function start() {
  await BookModel.sync({ alter: true });
}

start();
