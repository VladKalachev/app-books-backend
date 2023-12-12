import BookModel from '../models/book.model';

class BookService {
  async all() {
    return await BookModel.findAll();
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
