require("dotenv").config({ path: 'path/to/.env' });

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: "localhost",
      dialect: "mysql",
      // port: 8000,
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
