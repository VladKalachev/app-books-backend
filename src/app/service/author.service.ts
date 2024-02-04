import BookModel from '../models/book.model';
import AuthorModel from '../models/author.model';

class AuthorService {
  async all() {
    return await AuthorModel.findAll();
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
}

export default new AuthorService();
