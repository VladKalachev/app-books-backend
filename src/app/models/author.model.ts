import { DataTypes } from 'sequelize';
import sequelize from '../globals/sequelize';
import BookModel from './book.model';

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

AuthorModel.hasMany(BookModel);
BookModel.belongsTo(AuthorModel);

export default AuthorModel;
