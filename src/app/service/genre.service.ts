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
    const genre = await GenreModel.findOne({
      where: {
        id,
      },
    });

    await genre?.destroy();
  }

  async update(id: number, title: string) {
    const genre = await GenreModel.findOne({
      where: {
        id,
      },
    });

    await genre?.update({
      title,
    });

    return genre;
  }
}

export default new GenreService();
