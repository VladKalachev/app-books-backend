import { DataTypes, Model } from 'sequelize';
import sequelize from '../globals/sequelize';

class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare isActivated: boolean;
  declare activationLink: boolean;
  declare isAdmin: boolean;
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
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  },
);

export default User;
