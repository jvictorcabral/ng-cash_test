import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Users extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: 'accounts', key: 'id' }
  }
}, {
  modelName: 'users',
  timestamps: false,
  sequelize,
});

export default Users;
