import bodyParser from 'body-parser';
import { type Express } from 'express';

export default (server: Express) => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
};
