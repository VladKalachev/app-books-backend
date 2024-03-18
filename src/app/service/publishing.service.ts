import PublishingModel from '../models/publishing.model';

class PublishingService {
  async all() {
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
