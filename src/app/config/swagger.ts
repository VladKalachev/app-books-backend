import { HOST } from './app';

export default {
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
  },
  apis: ['./app/routes/*.ts'],
};
