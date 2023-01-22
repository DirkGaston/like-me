const express = require("express");
const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "..", "public", "index.html"));
});

router.use(express.static(path.join("public")));

router.use(require("./like.routes"));
router.use(require("./post.routes"));

module.exports = router;
