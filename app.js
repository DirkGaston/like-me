const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes");
const morgan = require("morgan");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(routes);

const port = process.env.REACT_APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
