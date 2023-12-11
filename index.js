import 'dotenv/config'
import { HOST, PORT } from './app/config/app.js'
import registerSwagger from '#app/globals/swagger.js';
import { CLIENT_HOST } from './app/config/client.js'
import registerRoutes from '#app/routes/index.js'
import express from 'express';

const app = express();

registerRoutes(app);
registerSwagger(app);

app.listen(PORT, () => {
	console.log(`Started on ${HOST}`);
});

import '#app/globals/sequelize.js'