import type { Application } from 'express';
import genreController from '../controllers/genre.controller';
import auth from '../middleware/auth';

export default function routesGenre(app: Application) {
  /**
   * @swagger
   * /api/genres:
   *   get:
   *     summary: Получение всего списка жанра книг
   *     description: Получение всего списка жанра книг
   *     tags:
   *      - Genre
   *     responses:
   *       200:
   *         description: Успешное получение списка Жанров
   */
  app.get('/api/genres', auth, genreController.all);

  /**
   * @swagger
   * /api/genres/create:
   *   post:
   *     summary: Добавление нового Жанра
   *     description: Добавление нового Жанра
   *     tags:
   *      - Genre
   *     parameters:
   *       - name: title
   *         in: path
   *         description: Наименование жанра
   *         required: true
   *     responses:
   *       200:
   *         description: Добавление жанра
   *       500:
   *        description: Ошибка на сервере
   */
  app.post('/api/genres/create', auth, genreController.create);

  /**
   * @swagger
   * /api/genres/:id:
   *   get:
   *     summary: Получение Жанра по id
   *     description: Получение Жанра по id
   *     tags:
   *      - Genre
   *     parameters:
   *            - name: id
   *              in: path
   *              description: id у жанра
   *              required: true
   *     responses:
   *       200:
   *         description: Успешное получение Жанра по id
   *       500:
   *        description: Ошибка на сервере
   */
  app.get('/api/genres/:id', auth, genreController.one);

  /**
   * @swagger
   * /api/genres/:id:
   *   delete:
   *     summary: Удаление Жанра по id
   *     description: Удаление Жанра по id
   *     tags:
   *      - Genre
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id у жанра
   *         required: true
   *     responses:
   *       200:
   *         description: Успешное удаление Жанра
   *       500:
   *         description: Ошибка на сервере
   */
  app.delete('/api/genres/:id', auth, genreController.remove);

  /**
   * @swagger
   * /api/genres/:id:
   *  put:
   *     summary: Редактирование Жанра по id
   *     description: Редактирование Жанра по id
   *     tags:
   *      - Genre
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id у жанра
   *         required: true
   *     responses:
   *       200:
   *         description: Успешное обновление жанра
   *       500:
   *         description: Ошибка на сервере
   */
  app.put('/api/genres/:id', auth, genreController.update);
}
