import 'dotenv/config';
import PublishingModel from '../src/app/models/publishing.model';

async function start() {
  await PublishingModel.sync({ alter: true });
}

start();
