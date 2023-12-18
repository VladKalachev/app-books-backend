import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';
import Book from './book.model';

class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare isActivated: boolean;
  declare activationLink: boolean;
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActivated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    activationLink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
);

User.hasMany(Book);
Book.belongsTo(User);

export default User;
