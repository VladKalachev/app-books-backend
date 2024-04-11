import GoalModel from '../models/goal.model';
import { Op } from 'sequelize';
import BookModel from '../models/book.model';
import { type IGoal } from '../types/goal.interface';

class GoalService {
  async all(querys: any) {
    const { limit, search = '' } = querys;
    const options = {
      limit: +limit ? +limit : 10000,
    };

    const query: any = {};
    if (search) {
      query.title = { [Op.substring]: search };
    }

    return await GoalModel.findAll({ where: query, ...options });
  }

  async create(obj: IGoal) {
    return await GoalModel.create({ ...obj });
  }

  async one(id: number) {
    return await GoalModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const genre = await GoalModel.findOne({
      where: {
        id,
      },
    });

    await genre?.destroy();
  }

  async update(
    id: number,
    title: string,
    completed: boolean,
    BookId: number,
    currentPages: number,
  ) {
    const goal = await GoalModel.findOne({
      where: {
        id,
      },
    });

    await goal?.update({
      title,
      completed,
      BookId,
      currentPages,
    });

    return goal;
  }

  async completed(id: number, completed: boolean) {
    const goal: any = await GoalModel.findOne({
      where: {
        id,
      },
    });

    const bookId = goal.BookId;

    const book = await BookModel.findOne({
      where: {
        id: bookId,
      },
    });

    await book?.update({
      read: completed,
    });

    await goal?.update({
      completed,
    });

    return goal;
  }
}

export default new GoalService();
