import { HOST } from './app';

export default {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Book App',
      version: '0.0.1',
      description: 'REST API for my Book App',
    },
    servers: [
      {
        url: HOST,
      },
    ],
  },
  apis: ['./app/routes/*.ts'],
};
