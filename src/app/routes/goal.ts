import type { Application } from 'express';
import goalsController from '../controllers/goals.controlle';
import auth from '../middleware/auth';
import genreController from '../controllers/genre.controller';

export default function routesGoal(app: Application) {
  /**
   * @swagger
   * /api/goals:
   *   get:
   *     summary: Получение всего списка Целей
   *     description: Получение всего списка Целей
   *     tags:
   *      - Goals
   *     responses:
   *       200:
   *         description: Успешное получение списка Целей
   */
  app.get('/api/goals', auth, goalsController.all);

  /**
   * @swagger
   * /api/goals/create:
   *   post:
   *     summary: Добавление новой Цели
   *     description: Добавление новой Цели
   *     tags:
   *      - Goals
   *     parameters:
   *       - name: title
   *         in: path
   *         description: Наименование Цели
   *         required: true
   *       - name: completed
   *         in: path
   *         description: выполнена/не выполнена цель
   *         required: false
   *     responses:
   *       200:
   *         description: Добавление Цели
   *       500:
   *        description: Ошибка на сервере
   */
  app.post('/api/goals/create', auth, goalsController.create);

  /**
   * @swagger
   * /api/goals/:id:
   *   get:
   *     summary: Получение Цели по id
   *     description: Получение Цели по id
   *     tags:
   *      - Goals
   *     parameters:
   *            - name: id
   *              in: path
   *              description: id у Цели
   *              required: true
   *     responses:
   *       200:
   *         description: Успешное получение Цели по id
   *       500:
   *        description: Ошибка на сервере
   */
  app.get('/api/goals/:id', auth, goalsController.one);
}
