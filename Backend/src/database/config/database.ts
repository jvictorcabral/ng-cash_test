import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'ng-cash',
  dialect: 'postgres',
})