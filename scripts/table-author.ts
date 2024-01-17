import 'dotenv/config';
import AuthorModel from '../src/app/models/author.model';

async function start() {
  await AuthorModel.sync({ alter: true });
}

start();
