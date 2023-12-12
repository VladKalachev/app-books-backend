import userController from '../controllers/user.controller';

import type { Express } from 'express';

export default function routesUser(app: Express) {
  /**
   * @swagger
   * /api/users/registration:
   *   get:
   *     summary: Регистрация нового пользователя
   *     description: Регистрация нового пользователя
   *     tags:
   *      - UserModel
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.get('/api/user/registration', userController.registration);

  /**
   * @swagger
   * /api/users/check:
   *   post:
   *     summary: Логин пользователя
   *     description: Логин пользователя
   *     tags:
   *      - UserModel
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.post('/api/user/login', userController.login);

  app.post('/api/user/logout', userController.logout);

  app.post('/api/user/refresh', userController.refresh);
}
