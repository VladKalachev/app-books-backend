import routesAuth from './auth';
import routesBooks from './books';
import type { Express } from 'express';

export default function registerRoutes(app: Express) {
  /**
   * @swagger
   * tags:
   *   name: User
   *   description: Пользователи
   */
  routesAuth(app);

  /**
   * @swagger
   * tags:
   *   name: Books
   *   description: Книги
   */
  routesBooks(app);
}
