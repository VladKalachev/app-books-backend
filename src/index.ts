import 'dotenv/config'
import cors from 'cors'
import express, { Express } from 'express';

import { HOST, PORT } from './app/config/app'
import { CLIENT_HOST } from './app/config/client'

import registerSwagger from './app/globals/swagger';
import registerRoutes from './app/routes/index'
import registerMiddleware from './app/middleware/index'


const app: Express = express();

app.use(cors({
	origin: [ CLIENT_HOST ]
}));

app.listen(PORT, () => {
	console.log(`Started on ${HOST}`);
});

registerMiddleware(app);
registerRoutes(app);
registerSwagger(app);

import '../src/app/globals/sequelize'