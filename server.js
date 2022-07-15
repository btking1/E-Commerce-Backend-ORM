const express = require("express");
const routes = require("./routes");
// import sequelize connection
const sequelize = require('./config/connection');
// const db = require("./config/connection.js");

const app = express();
const PORT = process.env.PORT || 8000;

// authenticate the db
// db.authenticate().then(() => {
//   console.log("Connection has been established successfully.");
// })
// .catch((err) => {
//   console.log("ERROR: " + err)
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

app.listen(8001, () => {
  console.log(`App listening on port ${PORT}!`);
});