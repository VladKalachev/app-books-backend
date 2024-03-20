import { HOST_SSL } from './app';
import type swaggerJsdoc from 'swagger-jsdoc';

const swaggerConfig: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My BookModel App',
      version: '0.0.1',
      description: 'REST API for my BookModel App',
    },
    servers: [
      {
        url: HOST_SSL,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          in: 'header',
          name: 'Authorization',
          description: 'Bearer token to access these api endpoints',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['**/*.ts'],
};

export default swaggerConfig;
