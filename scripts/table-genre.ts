import 'dotenv/config';
import GenreModel from '../src/app/models/genre.model';

async function start() {
  await GenreModel.sync({ alter: true });
}

start();
