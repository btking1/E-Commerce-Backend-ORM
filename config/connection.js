require("dotenv").config({ path: 'path/to/.env' });

const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize("ecommerce_db", "root", "", {
      host: "localhost",
      dialect: "mysql",
      // port: 8000,
      dialectOptions: {
        decimalNumbers: true,
      },
    });


module.exports = sequelize;
