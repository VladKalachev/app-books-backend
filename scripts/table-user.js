import 'dotenv/config'
import User from "../src/app/models/user";

await User.sync({ alter: true });
