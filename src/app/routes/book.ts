import bookController from '../controllers/book.controlle';
import type { Application } from 'express';

export default function routesBook(app: Application) {
  /**
   * @swagger
   * /api/books:
   *   get:
   *     summary: Получение всех книг
   *     description: Получение всех книг
   *     tags:
   *      - Books
   *     responses:
   *       200:
   *         description: Успешное получение списка книг
   */
  app.get('/api/books', bookController.all);

  /**
   * @swagger
   * /api/books/:id:
   *   get:
   *     summary: Получение одной книги
   *     description: Получеине одной книги
   *     tags:
   *      - Books
   *     parameters:
   *            - name: id
   *              in: path
   *              description: id у книги
   *              required: true
   *     responses:
   *       200:
   *         description: Успешное получение книги по id
   *       500:
   *        description: Ошибка на сервере
   */
  app.get('/api/books/:id', bookController.one);

  /**
   * @swagger
   * /api/books/create:
   *   post:
   *     summary: Добавление книги
   *     description: Добавление книги
   *     tags:
   *      - Books
   *     parameters:
   *       - name: title
   *         in: path
   *         description: Наименование книги
   *         required: true
   *     responses:
   *       200:
   *         description: Добавление книги
   */
  app.post('/api/books/create', bookController.create);

  /**
   * @swagger
   * /api/books/:id:
   *   delete:
   *     summary: Удаление книги
   *     description: Удаление книги
   *     tags:
   *      - Books
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id у книги
   *         required: true
   *     responses:
   *       200:
   *         description: Успешное удаление книги
   */
  app.delete('/api/books/:id', bookController.remove);

  /**
   * @swagger
   * /api/books/:id:
   *  put:
   *     summary: Редактирование книги
   *     description: Редактирование книги
   *     tags:
   *      - Books
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id у книги
   *         required: true
   *     responses:
   *       200:
   *         description: Успешное обновление книги
   */
  app.put('/api/books/:id', bookController.update);
}
