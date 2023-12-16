import 'dotenv/config';
import cors from 'cors';
import express, { type Application } from 'express';

import { HOST, PORT } from './app/config/app';
import { CLIENT_HOST } from './app/config/client';

import registerSwagger from './app/routes/swagger';
import registerRoutes from './app/routes/index';
import registerMiddleware from './app/middleware/index';

import '../src/app/globals/sequelize';

const app: Application = express();

app.use(
  cors({
    origin: [CLIENT_HOST],
  }),
);

app.listen(PORT, () => {
  console.log(`Started on ${HOST}`);
});

registerMiddleware(app);
registerSwagger(app);
registerRoutes(app);
