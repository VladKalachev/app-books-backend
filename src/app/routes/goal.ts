import type { Application } from 'express';
import goalsController from '../controllers/goals.controlle';
import auth from '../middleware/auth';

export default function routesGoal(app: Application) {
  /**
   * @swagger
   * /api/goals:
   *   get:
   *     summary: Получение всего списка жанра книг
   *     description: Получение всего списка жанра книг
   *     tags:
   *      - Goals
   *     responses:
   *       200:
   *         description: Успешное получение списка Жанров
   */
  app.get('/api/goals', auth, goalsController.all);
}
