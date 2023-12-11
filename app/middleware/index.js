import bodyParser from '#app/middleware/body-parser.js'
import convertEmptyStringToNull from '#app/middleware/convert-empty-string-to-null.js'
export default server => {
    bodyParser(server);
    convertEmptyStringToNull(server);
}