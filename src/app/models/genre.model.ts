import { DataTypes } from 'sequelize';
import sequelize from '../globals/sequelize';
import BookModel from './book.model';

const GenreModel = sequelize.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

BookModel.hasMany(GenreModel);
GenreModel.belongsTo(BookModel);

export default GenreModel;
