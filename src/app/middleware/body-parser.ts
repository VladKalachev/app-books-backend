import bodyParser from 'body-parser';
import type { Application } from 'express';

export default (server: Application) => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
};
