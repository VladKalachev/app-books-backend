

import booksAll from '#app/controllers/books/all.controller.js';
import bookOne from '#app/controllers/books/one.controller.js';
import bookCreate from '#app/controllers/books/create.controller.js';
import bookRemove from '#app/controllers/books/remove.controller.js';
import bookUpdate from "#app/controllers/books/update.controller.js";

export default function routesBooks(app){
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
  app.get('/api/books', booksAll);

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
  app.get('/api/books/:id', bookOne);

  /**
  * @swagger
  * /api/books:
  *   post:
  *     summary: Добавление книги
  *     description: Добавление книги
  *     tags:
  *      - Books
  *     responses:
  *       200:
  *         description: Добавление книги
  */
  app.post('/api/books/create', bookCreate);

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
  app.delete('/api/books/:id', bookRemove);

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
  app.put('/api/books/:id', bookUpdate);
}