import bodyParser from 'body-parser'
import {Express} from "express";

export default (server: Express) => {
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
}