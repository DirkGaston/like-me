const express = require("express");
const router = require("express").Router();
const { addLikeController } = require("../controllers/like.controllers");
const {
  queryValidator,
} = require("../middlewares/inputValidation.middlewares");

router.put("/posts/like/:id", queryValidator, addLikeController);

module.exports = router;
