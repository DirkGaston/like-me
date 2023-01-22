const { addLike } = require("../models/like.models");

const addLikeController = async (req, res) => {
  try {
    const { id } = req.params;
    await addLike(id);
    console.log(id);
    res.status(200).send("Like added successfully!");
  } catch (error) {
    res.status(500).send("Error: Unable to add like.");
  }
};

module.exports = { addLikeController };
