import { Sequelize } from 'sequelize'
import { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_DIALECT, DB_PORT } from '#app/config/db.js'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	host: DB_HOST,
	port: DB_PORT,
	dialect: DB_DIALECT
});

try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
} 
catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default sequelize;