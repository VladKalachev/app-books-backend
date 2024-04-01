import GenreModel from '../models/genre.model';
import { Op } from 'sequelize';

class GenreService {
  async all(querys: any) {
    const { limit, search = '' } = querys;
    const options = {
      limit: +limit ? +limit : 10000,
    };

    const query: any = {};
    if (search) {
      query.title = { [Op.substring]: search };
    }

    return await GenreModel.findAll({ where: query, ...options });
  }

  async create(title: string) {
    return await GenreModel.create({ title });
  }

  async one(id: number) {
    return await GenreModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const genre = await GenreModel.findOne({
      where: {
        id,
      },
    });

    await genre?.destroy();
  }

  async update(id: number, title: string, completed: string) {
    const genre = await GenreModel.findOne({
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

export default new GenreService();
