import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import options from '../config/swagger.js';

const swaggerSpec = swaggerJsdoc(options);
console.log(swaggerSpec)

export default function registerSwagger(app){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}