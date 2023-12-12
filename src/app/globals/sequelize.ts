import { Sequelize } from 'sequelize';
import { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_DIALECT, DB_PORT } from '../config/db';

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: Number(DB_PORT),
  dialect: DB_DIALECT,
});

async function initSequelize() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

initSequelize();

export default sequelize;
