import Book from '../models/book';

export const bookService = {
  all: async () => {
    return await Book.findAll();
  },
  one: async (id: number) => {
    return await Book.findOne({
      where: {
        id,
      },
    });
  },
};
