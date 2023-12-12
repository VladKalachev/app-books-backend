import bodyParser from '../middleware/body-parser'
import convertEmptyStringToNull from '../middleware/convert-empty-string-to-null'
import type {Express} from "express";
export default (server: Express) => {
    bodyParser(server);
    convertEmptyStringToNull(server);
}