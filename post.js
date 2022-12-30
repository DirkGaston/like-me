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
  const query = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)";
  const values = [titulo, url, descripcion];
  const result = await pool.query(query, values);
  console.log("¡Post agregado!");
};

const getPosts = async () => {
  const { rows } = await pool.query("SELECT * FROM posts");
  console.log(rows);
  return rows;
};

const addLike = async (id) => {
  const query = "UPDATE posts SET likes = likes + 1 WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
};

const deletePost = async (id) => {
  const query = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
};

module.exports = { addPost, getPosts, addLike, deletePost };
