import {Sequelize} from 'sequelize';
import config from '../lib/config.js';



const sequelize = new Sequelize(`postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?sslmode=no-verify`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialectOptions : {
      ssl : {
        require: true,
        rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      }
    }
})
export default sequelize;