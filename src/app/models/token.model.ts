import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';

class Token extends Model {
  declare id: number;
  declare user: string;
  declare refreshToken: string;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'token',
  },
);

export default Token;
