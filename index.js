import 'dotenv/config'
import { HOST, PORT } from './app/config/app.js'
import { CLIENT_HOST } from './app/config/client.js'
import registerRoutes from '#app/routes/index.js'
import express from 'express';

const app = express();



// // import swaggerUi from 'swagger-ui-express';
// // import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerSpec from '#app/globals/swagger.js';
import registerSwagger from '#app/globals/swagger.js';


// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'My Book App',
//       version: '0.0.1',
//       description: "Api my books app"
//     },
// 		servers: [
// 			{
// 				url: "http://localhost:5000/",
// 			},
// 		],
//   },
//   apis: ['./app/routes/*.js'],
// };

// const swaggerSpec = swaggerJsdoc(options);
// console.log(swaggerSpec)

registerRoutes(app);
registerSwagger(app);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
	console.log(`Started on ${HOST}`);
});

import '#app/globals/sequelize.js'