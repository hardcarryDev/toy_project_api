import { dataSource } from './DataSource';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
const environment = process.env.NODE_ENV;
const config = dataSource[environment];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

class DataBase {
  public db: { [key: string]: any } = {};
  init() {
    this.db = {
      sequelize: sequelize,
      Sequelize: Sequelize,
    };
  }
}

export default new DataBase();
