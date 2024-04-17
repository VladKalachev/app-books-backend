import 'dotenv/config';
import UserModel from '../src/app/models/user.model';
import BookModel from '../src/app/models/book.model';
import Token from '../src/app/models/token.model';
import AuthorModel from '../src/app/models/author.model';
import GenreModel from '../src/app/models/genre.model';
import PublishingModel from '../src/app/models/publishing.model';
import GoalModel from '../src/app/models/goal.model';

async function start() {
  await UserModel.sync({ alter: true });
  await Token.sync({ alter: true });
  await AuthorModel.sync({ alter: true });
  await GenreModel.sync({ alter: true });
  await PublishingModel.sync({ alter: true });
  await BookModel.sync({ alter: true });
  await GoalModel.sync({ alter: true });
}

start();
