const express = require("express");
const router = require("express").Router();
const { addLikeController } = require("../controllers/like.controllers");

router.put("/posts/like/:id", addLikeController);

module.exports = router;
