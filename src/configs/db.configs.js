require("dotenv").config();

const credentials = {
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB,
  allowExitOnIdle: true,
};

module.exports = { credentials };
