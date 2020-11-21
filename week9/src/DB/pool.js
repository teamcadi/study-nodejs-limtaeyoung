const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DATABSE_HOST, // localhost
  user: process.env.DATABASE_USER, // root
  password: process.env.DATABASE_PASSWORD,
  database: "board",
  waitForConnections: true,
  connectionLimit: 5,
});

/*
(async () => {
  const conn = await pool.getConnection();
  // create database, table
  // const sql = "CREATE DATABASE board;"
  await conn.execute(
    `
    CREATE TABLE user (
      id        int(11)       NOT NULL  AUTO_INCREMENT,
      email     varchar(100)  NOT NULL,
      name      varchar(50)   NOT NULL,
      password  varchar(100)  NOT NULL,
      createdAt TIMESTAMP     NOT NULL  DEFAULT CURRENT_TIMESTAMP(),
      updatedAt TIMESTAMP     NOT NULL  DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
      PRIMARY KEY (id),
      UNIQUE KEY (email)
    )
    `
  );
})();
*/
module.exports = {
  getConn: () => pool.getConnection(),
};

// console.dir(pool); // log, error
