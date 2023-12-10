import 'dotenv/config'
import { HOST, PORT } from './app/config/app.js'
import { CLIENT_HOST } from './app/config/client.js'
import registerRoutes from '#app/routes/index.js'
import express from 'express'

const app = express();

app.listen(PORT, () => {
	console.log(`Started on ${HOST}`);
});

registerRoutes(app);

import '#app/globals/sequelize.js'