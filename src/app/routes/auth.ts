import check from "../controllers/auth/check";
import login from "../controllers/auth/login";
import type {Express} from "express";

export default function routesAuth(app: Express){
   /**
   * @swagger
   * /api/auth/check:
   *   get:
   *     summary: Аутоиндификация пользователя
   *     description: Аутоиндификация пользователя
   *     tags:
   *      - User
   *     responses:
   *       200:
   *         description: Success
   *       500:
   *         description: Server Error
   */
	app.get('/api/auth/check', check);

   /**
   * @swagger
   * /api/auth/check:
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
	app.post('/api/auth/login', login);
}