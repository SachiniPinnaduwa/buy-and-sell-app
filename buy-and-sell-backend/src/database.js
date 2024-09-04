const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "hapi-server",
  password: "Sachinip2@",
  database: "buy-and-sell",
});

const db = {
  connect: () => connection.connect(),
  query: (queryString, escapedValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapedValues, (error, results, fields) => {
        if (error) reject(error);
        resolve({ results, fields });
      });
    }),
  end: () => connection.end(),
};

module.exports = db;
