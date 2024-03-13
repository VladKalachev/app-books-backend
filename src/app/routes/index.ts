import type { Application } from 'express';
import routesUser from './user';
import routesBook from './book';
import routesTest from './test';
import routesGenre from './genre';
import routesAuthor from './author';
import routesPublishing from './publishing';

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

  /**
   * @swagger
   * tags:
   *   name: Test
   *   description: Тестовый
   */
  routesTest(app);

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
   *   description: Жанр
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
