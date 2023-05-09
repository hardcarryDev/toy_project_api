import { dataSource } from './DataSource';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const environment = process.env.NODE_ENV;
const config = dataSource[environment];
const db = {
  sequelize: {},
  Sequelize: {},
};
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db, sequelize };
