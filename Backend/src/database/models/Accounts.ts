import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
// import Transictions from './Transictions';

class Accounts extends Model {
  public id!: number;
  public balance!: number;
}

Accounts.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  modelName: 'accounts',
  timestamps: false,
  sequelize,
});

export default Accounts;
