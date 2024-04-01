import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';
import User from './user.model';
import AuthorModel from './author.model';
import Genre from './genre.model';
import Publishing from './publishing.model';
import Goal from './goal.model';

export class Books extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare genre: string;
  declare fullName: string;
  declare image: string;
  declare year: number;
  declare numberPages: number;
  declare publishing: boolean;
  declare notes: string;
  declare read: boolean;
  declare buy: boolean;
}

Books.init(
  {
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
      allowNull: true,
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
      allowNull: true,
      defaultValue: null,
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
      allowNull: true,
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    buy: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'books',
  },
);

User.hasMany(Books);
Books.belongsTo(User);

AuthorModel.hasMany(Books);
Books.belongsTo(AuthorModel);

Genre.hasMany(Books);
Books.belongsTo(Genre);

Goal.hasMany(Books);
Books.belongsTo(Goal);

Publishing.hasMany(Books);
Books.belongsTo(Publishing);

export default Books;
