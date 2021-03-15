const express = require("express");
const cors = require("cors");
const { NODE_PORT, NODE_URI } = require("./config");
const { getDBConnection } = require("./config/dbConnection");
getDBConnection();
const errorMiddleware = require("./middlewares/errorHandlers/errorMiddleware");

const app = express();
require("./config/dbConnection");
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).send("Hello world");
});

app.use(errorMiddleware);

app.listen(NODE_PORT, () => {
  console.log(`Listening at ${NODE_URI}`);
});
