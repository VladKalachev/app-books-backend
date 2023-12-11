import routesAuth from './auth.js';
import routesBooks from './books.js';

export default function registerRoutes(app){
  /**
  * @swagger
  * tags:
  *   name: User
  *   description: Управлением пользователем и авторизация
  */
  routesAuth(app);
	
  /**
  * @swagger
  * tags:
  *   name: Books
  *   description: Книги
  */
  routesBooks(app);
};
