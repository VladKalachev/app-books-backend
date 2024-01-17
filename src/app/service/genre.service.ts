import GenreModel from '../models/genre.model';

class GenreService {
  async all() {
    return await GenreModel.findAll();
  }

  async getAllBooksByUserId(userId: number) {
    const books = await GenreModel.findAll({ where: { userId } });
    return books;
  }

  async one(id: number) {
    return await GenreModel.findOne({
      where: {
        id,
      },
    });
  }
}

export default new GenreService();
