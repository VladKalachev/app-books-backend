import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';

export class Goal extends Model {
  declare id: number;
  declare title: string;
  declare completed: boolean;
}

Goal.init(
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
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'goals',
  },
);

export default Goal;
