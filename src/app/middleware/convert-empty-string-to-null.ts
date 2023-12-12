import {Express} from "express";

export default (server: Express) => {
    server.use((request, _, next) => {
        if(['POST', 'PATCH', 'PUT'].includes(request.method)){
            for(let key in request.body){
                if(typeof request.body[key] === 'string'){
                    request.body[key] = request.body[key].trim();

                    if(request.body[key] === ''){
                        delete request.body[key];
                    }
                }
            }
        }

        next();
    });
}