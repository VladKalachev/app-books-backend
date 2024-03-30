import AuthorModel from '../models/author.model';
import { Op } from 'sequelize';

class AuthorService {
  async all(querys: any) {
    const { search = '' } = querys;
    const query: any = {};

    if (search) {
      query.fullName = { [Op.substring]: search };
    }

    return await AuthorModel.findAll({ where: query });
  }

  async create(fullName: string) {
    return await AuthorModel.create({ fullName });
  }

  async remove(id: number) {
    const author = await AuthorModel.findOne({
      where: {
        id,
      },
    });

    await author?.destroy();
  }

  async one(id: number) {
    return await AuthorModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, fullName: string) {
    const author = await AuthorModel.findOne({
      where: {
        id,
      },
    });

    await author?.update({
      fullName,
    });

    return author;
  }
}

export default new AuthorService();
