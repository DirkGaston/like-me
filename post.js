const { Pool } = require("pg");

require("dotenv").config({ path: "./.env" });

const credentials = {
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: "likeme",
  allowExitOnIdle: true,
};

const pool = new Pool(credentials);

const addPost = async (titulo, url, descripcion) => {
  const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3)";
  const values = [titulo, url, descripcion];
  const result = await pool.query(query, values);
  console.log("¡Post agregado!");
};

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
};

module.exports = { addPost, getPosts };
