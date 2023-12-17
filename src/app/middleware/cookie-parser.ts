import cookieParser from 'cookie-parser';
import type { Application } from 'express';

export default (server: Application) => {
  server.use(cookieParser());
};
