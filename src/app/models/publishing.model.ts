import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';

export class Publishing extends Model {
  declare id: number;
  declare title: string;
}

Publishing.init(
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
    tableName: 'publishing',
  },
);

export default Publishing;
