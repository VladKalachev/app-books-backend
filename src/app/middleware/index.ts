import bodyParser from '../middleware/body-parser';
import convertEmptyStringToNull from '../middleware/convert-empty-string-to-null';
import type { Application } from 'express';
export default (server: Application) => {
  bodyParser(server);
  convertEmptyStringToNull(server);
};
