require("dotenv").config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  // process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, 
  : new Sequelize("ecommerce_db", "root", "spiderman", {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// const { Sequelize } = require("sequelize");

// const db = new Sequelize("ecommerce_db", "root", "spiderman", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 9,
//     min: 0,
//     idle: 10000,
//   },
// });

module.exports = sequelize;
