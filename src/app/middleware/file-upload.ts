import fileUpload from 'express-fileupload';
import type { Application } from 'express';

export default (server: Application) => {
  server.use(fileUpload({}));
};
