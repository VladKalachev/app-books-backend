import type { Application } from 'express';
import auth from '../middleware/auth';
import publishingController from '../controllers/publishing.controller';

export default function routesPublishing(app: Application) {
  /**
   * Получение всего списка Издательств
   */
  app.get('/api/publishing', auth, publishingController.all);
}
