import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import options from '../config/swagger';
import type {Express} from "express";

const swaggerSpec = swaggerJsdoc(options);

export default function registerSwagger(app: Express){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}