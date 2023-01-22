const { query } = require("../services/db.services");

const getPosts = async () => {
  const queryText = "SELECT * FROM posts ORDER BY id ASC";
  const result = await query(queryText);
  return result;
};

const addPost = async (titulo, url, descripcion) => {
  const queryText = "INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, 0)";
  const values = [titulo, url, descripcion];
  const result = await query(queryText, values);
};

const deletePost = async (id) => {
  const queryText = "DELETE FROM posts WHERE id = $1";
  const values = [id];
  const result = await query(queryText, values);
};

module.exports = { getPosts, addPost, deletePost };
