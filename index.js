import 'dotenv/config'
import { HOST, PORT } from './app/config/app.js'
import { CLIENT_HOST } from './app/config/client.js'

import registerSwagger from '#app/globals/swagger.js';
import registerRoutes from '#app/routes/index.js'
import registerMiddleware from '#app/middleware/index.js'

import cors from 'cors'
import express from 'express';

const app = express();

app.use(cors({
	origin: [ CLIENT_HOST ]
}));

app.listen(PORT, () => {
	console.log(`Started on ${HOST}`);
});

registerMiddleware(app);
registerRoutes(app);
registerSwagger(app);

import '#app/globals/sequelize.js'