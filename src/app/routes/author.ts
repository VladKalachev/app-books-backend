import type { Application } from 'express';
import authorController from '../controllers/author.controller';
import auth from '../middleware/auth';
import bookController from '../controllers/book.controlle';

export default function routesAuthor(app: Application) {
  /**
   * @swagger
   * /api/authors:
   *   get:
   *     summary: Получение всего списка авторов книг
   *     description: Получение всего списка авторов книг
   *     tags:
   *      - Author
   *     responses:
   *       200:
   *         description: Успешное получение списка авторов
   */
  app.get('/api/authors', auth, authorController.all);

  /**
   * @swagger
   * /api/authors/create:
   *   post:
   *     summary: Добавление нового автора
   *     description: Добавление нового автора
   *     tags:
   *      - Author
   *     parameters:
   *       - name: fullName
   *         in: path
   *         description: ФИО автора
   *         required: true
   *     responses:
   *       200:
   *         description: Добавление автора
   *       500:
   *        description: Ошибка на сервере
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
