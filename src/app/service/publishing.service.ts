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
}

export default new PublishingService();
