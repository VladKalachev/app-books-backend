import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';

export class Genre extends Model {
  declare id: number;
  declare title: string;
}

Genre.init(
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
  },
  {
    sequelize,
    tableName: 'genres',
  },
);

export default Genre;
