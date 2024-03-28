import BookModel from '../models/book.model';

class BookService {
  async all() {
    return await BookModel.findAll();
  }

  async getAllBooksByUserId(userId: number, query: any) {
    // const options = {
    //   limit: query.limit,
    // };
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

export default new BookService();
