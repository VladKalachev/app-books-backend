import bodyParser from 'body-parser'

export default server => {
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());
}