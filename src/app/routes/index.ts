import type { Application } from 'express';
import routesUser from './user';
import routesBook from './book';
import routesGenre from './genre';
import routesAuthor from './author';
import routesPublishing from './publishing';

export default function registerRoutes(app: Application) {
  /**
   * @swagger
   * tags:
   *   name: User
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

  /**
   * @swagger
   * tags:
   *   name: Author
   *   description: Авторы
   */
  routesAuthor(app);

  /**
   * @swagger
   * tags:
   *   name: Genre
   *   description: Жанры
   */
  routesGenre(app);

  /**
   * @swagger
   * tags:
   *   name: Publishing
   *   description: Издательств
   */
  routesPublishing(app);
}
