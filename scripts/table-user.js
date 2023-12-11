import 'dotenv/config'
import User from "#app/models/user.js";

await User.sync({ alter: true });