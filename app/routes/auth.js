import check from "#app/controllers/auth/check.controller.js";
import login from "#app/controllers/auth/login.controller.js";

export default function routesAuth(app){
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