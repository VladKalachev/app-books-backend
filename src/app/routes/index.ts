import routesUser from './user';
import routesBook from './book';
import type { Application } from 'express';

export default function registerRoutes(app: Application) {
  /**
   * @swagger
   * tags:
   *   name: UserModel
   *   description: Пользователи
   */
  routesUser(app);

  /**
   * @swagger
   * tags:
   *   name: Books
   *   description: Книги
   */
  routesBook(app);
}
