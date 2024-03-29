import BookModel from '../models/book.model';
import { Op } from 'sequelize';

class BookService {
  async all() {
    return await BookModel.findAll();
  }

  async getAllBooksByUserId(userId: number, querys: any) {
    const { search = '' } = querys;
    const query: any = {};

    if (search) {
      query.title = { [Op.substring]: search };
    }

    const books = await BookModel.findAll({ where: { userId, ...query } });
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

export default new BookService();
