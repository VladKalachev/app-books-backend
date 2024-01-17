import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';

export class Author extends Model {
  declare id: number;
  declare fullName: string;
}

Author.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'authors',
  },
);

export default Author;
