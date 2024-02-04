import type { Application } from 'express';
import authorController from '../controllers/author.controller';
import auth from '../middleware/auth';
import bookController from '../controllers/book.controlle';

export default function routesAuthor(app: Application) {
  /**
   * Получение всего списка авторов книг
   */
  app.get('/api/authors', auth, authorController.all);

  /**
   * Добавление нового автора
   */
  app.post('/api/authors/create', auth, authorController.create);

  /**
   * Получение автора по id
   */
  app.get('/api/authors/:id', auth, authorController.one);

  /**
   * Удаление автора по id
   */
  app.delete('/api/authors/:id', auth, authorController.remove);

  /**
   * Редактирование автора по id
   */
  app.put('/api/authors/:id', auth, authorController.update);
}
