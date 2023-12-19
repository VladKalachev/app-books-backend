import { DataTypes } from 'sequelize';
import sequelize from '../globals/sequelize';
import User from './user.model';

const BookModel = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numberPages: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  publishing: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  read: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  buy: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

User.hasMany(BookModel);
BookModel.belongsTo(User);

export default BookModel;
