import 'dotenv/config';
import GoalModel from '../src/app/models/goal.model';

async function start() {
  await GoalModel.sync({ alter: true });
}

start();
