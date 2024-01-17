import type { Application } from 'express';
import routesUser from './user';
import routesBook from './book';
import routesTest from './test';
import routesGenre from './genre';
import routesAuthor from './author';

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

  routesTest(app);

  routesAuthor(app);
  routesGenre(app);
}
