import 'dotenv/config';
import UserModel from '../src/app/models/user.model';

await UserModel.sync({ alter: true });
