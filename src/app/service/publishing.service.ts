import PublishingModel from '../models/publishing.model';

class PublishingService {
  async all() {
    return await PublishingModel.findAll();
  }
}

export default new PublishingService();
