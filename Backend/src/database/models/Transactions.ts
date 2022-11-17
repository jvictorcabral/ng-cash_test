import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';
import Accounts from './Accounts';

class Transactions extends Model {
  public id!: number;
  public debitedAccountId!: number;
  public creditedAccountId!: number;
  public value!: number;
  public createdAt!: Date;
}

Transactions.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  debitedAccountId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    // references: { model: 'accounts', key: 'id' }
  },
  creditedAccountId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    // references: { model: 'accounts', key: 'id' }
  },
  value: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  modelName: 'transactions',
  sequelize,
  updatedAt: false
});

Transactions.belongsTo(Accounts, { foreignKey: 'debitedAccountId', as: 'accountDebited' });
Transactions.belongsTo(Accounts, { foreignKey: 'creditedAccountId', as: 'accountCredited' });

export default Transactions;
