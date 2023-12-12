import { DataTypes } from 'sequelize';
import sequelize from '../globals/sequelize';

const TokenModel = sequelize.define('Token', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default TokenModel;
