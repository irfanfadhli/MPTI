require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,   // resto_db
  process.env.DB_USER,   // root
  process.env.DB_PASS,   // password
  {
    host: process.env.DB_HOST, // localhost
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
