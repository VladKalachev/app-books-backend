import bodyParser from '../middleware/body-parser';
import convertEmptyStringToNull from '../middleware/convert-empty-string-to-null';
import type { Application } from 'express';
import cookieParser from './cookie-parser';
// import errorParser from './error-parser';

export default (server: Application) => {
  cookieParser(server);
  bodyParser(server);
  convertEmptyStringToNull(server);
};
