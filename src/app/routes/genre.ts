import type { Application } from 'express';
import genreController from '../controllers/genre.controller';
import auth from '../middleware/auth';

export default function routesGenre(app: Application) {
  /**
   * Получение всего списка жанра книг
   */
  app.get('/api/genres', auth, genreController.all);
}
