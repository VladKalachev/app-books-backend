import type { Application } from 'express';
import auth from '../middleware/auth';
import publishingController from '../controllers/publishing.controller';

export default function routesPublishing(app: Application) {
  /**
   * @swagger
   * /api/publishing:
   *   get:
   *     summary: Получение всего списка Издательств
   *     description: Получение всего списка Издательств
   *     tags:
   *      - Publishing
   *     responses:
   *       200:
   *         description: Успешное получение списка Издательств
   */
  app.get('/api/publishing', auth, publishingController.all);

  /**
   * @swagger
   * /api/publishing/create:
   *   post:
   *     summary: Добавление нового Издательства
   *     description: Добавление нового Издательства
   *     tags:
   *      - Publishing
   *     parameters:
   *       - name: title
   *         in: path
   *         description: Наименование Издательства
   *         required: true
   *     responses:
   *       200:
   *         description: Добавление Издательства
   *       500:
   *        description: Ошибка на сервере
   */
  app.post('/api/publishing/create', auth, publishingController.create);

  /**
   * @swagger
   * /api/publishing/:id:
   *   get:
   *     summary: Получение Издательства по id
   *     description: Получение Издательства по id
   *     tags:
   *      - Publishing
   *     parameters:
   *            - name: id
   *              in: path
   *              description: id у Издательства
   *              required: true
   *     responses:
   *       200:
   *         description: Успешное получение Издательства по id
   *       500:
   *        description: Ошибка на сервере
   */
  app.get('/api/publishing/:id', auth, publishingController.one);

  /**
   * @swagger
   * /api/publishing/:id:
   *   delete:
   *     summary: Удаление Издательства по id
   *     description: Удаление Издательства по id
   *     tags:
   *      - Publishing
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id у Издательства
   *         required: true
   *     responses:
   *       200:
   *         description: Успешное удаление Издательства
   *       500:
   *         description: Ошибка на сервере
   */
  app.delete('/api/publishing/:id', auth, publishingController.remove);

  /**
   * @swagger
   * /api/publishing/:id:
   *  put:
   *     summary: Редактирование Издательства по id
   *     description: Редактирование Издательства по id
   *     tags:
   *      - Publishing
   *     parameters:
   *       - name: id
   *         in: path
   *         description: id у Издательства
   *         required: true
   *     responses:
   *       200:
   *         description: Успешное обновление Издательства
   *       500:
   *         description: Ошибка на сервере
   */
  app.put('/api/publishing/:id', auth, publishingController.update);
}
