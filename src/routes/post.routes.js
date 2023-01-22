const { Router } = require("express");
const {
  getAll,
  addNew,
  removePost,
} = require("../controllers/post.controllers");
const {
  queryValidator,
} = require("../middlewares/inputValidation.middlewares");

const router = Router();

router
  .get("/posts", getAll)
  .post("/posts", queryValidator, addNew)
  .delete("/posts/:id", removePost);

module.exports = router;
