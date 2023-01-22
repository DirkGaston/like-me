const { getPosts, addPost, deletePost } = require("../models/post.models");

const getAll = async (req, res) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addNew = async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    await addPost(titulo, url, descripcion);
    const posts = await getPosts();
    res.status(200).send("Post added successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const removePost = async (req, res) => {
  try {
    const { id } = req.params;
    await deletePost(id);
    res.status(200).send("Post deleted successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAll, addNew, removePost };
