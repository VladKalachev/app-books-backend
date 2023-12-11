import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Book App',
      version: '0.0.1',
      description: "REST API for my Book App"
    },
		servers: [
			{
				url: "http://localhost:5000/",
			},
		],
  },
  apis: ['./app/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
console.log(swaggerSpec)

export default function registerSwagger(app){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}