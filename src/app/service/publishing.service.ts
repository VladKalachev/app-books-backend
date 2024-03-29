import PublishingModel from '../models/publishing.model';
import { Op } from 'sequelize';

class PublishingService {
  async all(querys: any) {
    const { search = '' } = querys;
    const query: any = {};

    if (search) {
      query.title = { [Op.substring]: search };
    }

    return await PublishingModel.findAll();
  }

  async create(title: string) {
    return await PublishingModel.create({ title });
  }

  async one(id: number) {
    return await PublishingModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const publishing = await PublishingModel.findOne({
      where: {
        id,
      },
    });

    await publishing?.destroy();
  }

  async update(id: number, title: string) {
    const publishing = await PublishingModel.findOne({
      where: {
        id,
      },
    });

    await publishing?.update({
      title,
    });

    return publishing;
  }
}

export default new PublishingService();
