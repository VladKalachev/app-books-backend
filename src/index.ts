import 'dotenv/config';
import cors from 'cors';
import express, { type Application } from 'express';
import https from 'https';
import { HOST, HOST_SSL, PORT, PORT_SSL } from './app/config/app';
import { CLIENT_HOST, CLIENT_HOST_SLL } from './app/config/client';

import registerSwagger from './app/routes/swagger';
import registerRoutes from './app/routes/index';
import registerMiddleware from './app/middleware/index';

import '../src/app/globals/sequelize';
import './app/models/test.model';
import errorParser from './app/middleware/error-parser';

import fs from 'fs';
import path from 'path';

const credentials = {
  key: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '..', 'ssl', 'cert.pem')),
};

const app: Application = express();
const httpsServer = https.createServer(credentials, app);

app.use('/api/upload', express.static(path.resolve(__dirname, '..', 'upload')));

app.use(
  cors({
    origin: [CLIENT_HOST, CLIENT_HOST_SLL],
    credentials: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Started on ${HOST}`);
});

httpsServer.listen(PORT_SSL, () => {
  console.log(`Started on ${HOST_SSL}`);
});

registerMiddleware(app);
registerRoutes(app);

if (process.env.NODE_ENV === 'develop') {
  registerSwagger(app);
}

app.use(errorParser);
