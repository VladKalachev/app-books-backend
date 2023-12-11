import 'dotenv/config'
import mariadb from 'mariadb';
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from '#app/config/db.js'

const connection = mariadb.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS
});

connection.then(db => {
    db.query(
        `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`
    )
        .then(console.log)
        .catch(console.log)
        .finally(() => {
            db.end();
        });
});