import swaggerJsdoc from 'swagger-jsdoc';
import options from '../config/swagger';
import type { Application, Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';

const swaggerSpec = swaggerJsdoc(options);

export default function routesSwagger(app: Application) {
  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      // swaggerOptions: {
      //   docExpansions: 'none',
      //   persistAuthorization: true,
      // },
    }),
  );

  app.use('/docs', (req: Request, res: Response) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}
