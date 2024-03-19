import userController from '../controllers/user.controller';

import type { Application } from 'express';
import { body } from 'express-validator';
import auth from '../middleware/auth';

export default function routesUser(app: Application) {
  /**
   * @swagger
   * /api/users/registration:
   *   get:
   *     summary: Регистрация нового пользователя
   *     description: Регистрация нового пользователя
   *     tags:
   *      - User
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
   * /api/user/login:
   *   post:
   *     summary: Логин пользователя
   *     description: Логин пользователя
   *     tags:
   *      - User
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.post(
    '/api/user/login',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 20 }),
    userController.login,
  );

  /**
   * @swagger
   * /api/user/logout:
   *   post:
   *     summary: Разлогин пользователя
   *     description: Разлогин пользователя
   *     tags:
   *      - User
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.post('/api/user/logout', userController.logout);

  /**
   * @swagger
   * /api/activate/:link:
   *   get:
   *     summary: Получение ссылки активации пользователя
   *     description: Получение ссылки активации пользователя
   *     tags:
   *      - User
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.get('/api/activate/:link', userController.activate);

  /**
   * @swagger
   * /api/user/refresh:
   *   get:
   *     summary: Рефреш токена
   *     description: Рефреш токена
   *     tags:
   *      - User
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.get('/api/user/refresh', userController.refresh);

  /**
   * @swagger
   * /api/users:
   *   get:
   *     summary: Получение списка пользователей
   *     description: Получение списка пользователей
   *     tags:
   *      - User
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.get('/api/users', auth, userController.getUsers);

  /**
   * @swagger
   * /api/usersWithBooks:
   *   get:
   *     summary: Получение списка пользователей с книгами
   *     description: Получение списка пользователей с книгами
   *     tags:
   *      - User
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
  app.get('/api/usersWithBooks', auth, userController.getUsersWithBooks);
}
