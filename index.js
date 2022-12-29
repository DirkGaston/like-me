const { addPost, getPosts } = require("./post");

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

require("dotenv").config({ path: "./.env" });

app.use(express.json());

app.use(cors());

app.use(express.static("public"));

app.listen(3000, console.log("¡Servidor encendido!"));

app.get("/posts", async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  await addPost(titulo, url, descripcion);
  res.send("¡Post agregado con éxito!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
