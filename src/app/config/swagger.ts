import { HOST } from './app';
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
        url: HOST,
      },
    ],
    // components: {
    //   securitySchemes: {
    //     bearerAuth: {
    //       type: 'http',
    //       scheme: 'bearer',
    //     },
    //   },
    //   schemas: {
    //     UpdateEmployeeRequest: {
    //       type: 'object',
    //       properties: {
    //         id: 0,
    //         name: 'string',
    //       },
    //     },
    //   },
    // },
  },
  apis: ['./app/routes/*.ts'],
};

export default swaggerConfig;
