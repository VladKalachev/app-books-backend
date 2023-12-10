import check from "../controllers/auth/check.js";

export default function registerRoutes(app){
	app.get('/auth/check', check);
};