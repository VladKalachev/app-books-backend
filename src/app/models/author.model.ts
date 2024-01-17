import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';
import BookModel from './book.model';

export class Author extends Model {
  declare id: number;
  declare fullName: string;
}

const AuthorModel = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// AuthorModel.hasMany(BookModel);
// BookModel.belongsTo(AuthorModel);
//
BookModel.hasMany(AuthorModel);
AuthorModel.belongsTo(BookModel);

export default AuthorModel;
