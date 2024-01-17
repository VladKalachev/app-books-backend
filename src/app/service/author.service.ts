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

  async getAllBooksByUserId(userId: number) {
    const books = await BookModel.findAll({ where: { userId } });
    return books;
  }

  async one(id: number) {
    return await BookModel.findOne({
      where: {
        id,
      },
    });
  }
}

export default new AuthorService();
