import 'dotenv/config';
import UserModel from '../src/app/models/user.model';

async function start() {
  await UserModel.sync({ alter: true });
}

start();
