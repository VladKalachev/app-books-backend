import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';
import Books from './book.model';

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
      allowNull: true,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'goals',
  },
);

Books.hasOne(Goal);
Goal.belongsTo(Books);

export default Goal;