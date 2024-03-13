import GenreModel from '../models/genre.model';

class GenreService {
  async all() {
    return await GenreModel.findAll();
  }

  async create(title: string) {
    return await GenreModel.create({ title });
  }

  async one(id: number) {
    return await GenreModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number) {
    const author = await GenreModel.findOne({
      where: {
        id,
      },
    });

    await author?.destroy();
  }
}

export default new GenreService();
