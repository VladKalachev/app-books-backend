import type { Application } from 'express';
import testController from '../controllers/test.controller';

export default function routesTest(app: Application) {
  app.get('/api/test', testController.all);
}
