import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';
import User from './user.model';

class Token extends Model {
  declare refreshToken: string;
}

Token.init(
  {
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    tableName: 'token',
  },
);

User.hasOne(Token);
Token.belongsTo(User);

export default Token;
