import 'dotenv/config';
import UserModel from '../src/app/models/user.model';
// import Token from '../src/app/models/token.model';

async function start() {
  await UserModel.sync({ alter: true });
}

start();
