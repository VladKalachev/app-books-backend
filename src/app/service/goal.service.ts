import GoalModel from '../models/goal.model';
import { Op } from 'sequelize';

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

  async create(title: string, completed: string, BookId: number) {
    return await GoalModel.create({ title, completed, BookId });
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

  async update(id: number, title: string, completed: string) {
    const genre = await GoalModel.findOne({
      where: {
        id,
      },
    });

    await genre?.update({
      title,
      completed,
    });

    return genre;
  }
}

export default new GoalService();
