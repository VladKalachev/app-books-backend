import 'dotenv/config';
import Token from '../src/app/models/token.model';

async function start() {
  await Token.sync({ alter: true });
}

start();
