import type { Application } from 'express';
import genreController from '../controllers/genre.controller';
import auth from '../middleware/auth';

export default function routesGenre(app: Application) {
  /**
   * Получение всего списка жанра книг
   */
  app.get('/api/genres', auth, genreController.all);

  /**
   * Добавление нового Жанра
   */
  app.post('/api/genres/create', auth, genreController.create);

  /**
   * Получение Жанра по id
   */
  app.get('/api/genres/:id', auth, genreController.one);

  /**
   * Удаление Жанра по id
   */
  app.delete('/api/genres/:id', auth, genreController.remove);
}
