import { Sequelize } from "sequelize";

const database = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "test"
});

export default database;
