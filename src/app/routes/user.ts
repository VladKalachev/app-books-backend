import userController from '../controllers/user.controller';

import type { Application } from 'express';
import { body } from 'express-validator';

export default function routesUser(app: Application) {
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
  app.post(
    '/api/user/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 20 }),
    userController.registration,
  );

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

  /**
   * @openapi
   * /api/user/logout
   *  post
   */
  app.post('/api/user/logout', userController.logout);

  app.get('/api/activate/:link', userController.activate);
  app.get('/api/user/refresh', userController.refresh);

  app.get('/api/users', userController.getUsers);
}
