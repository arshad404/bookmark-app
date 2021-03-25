// const dotenv = require("dotenv");
// dotenv.config({ path: ".. /config.env" });

require("dotenv").config();

const PRODUCTION_ENV = process.env.NODE_ENV === "production";

const NODE_PORT = process.env.NODE_PORT || 5000;
const { NODE_HOST, NODE_HTTPS } = process.env;
const protocol = NODE_HTTPS == true ? "https" : "http";
const NODE_URI = `${protocol}://${NODE_HOST}:${NODE_PORT}`;

const { DB_HOST, DB_PORT, DB_NAME } = process.env;
const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const { JWT_PRIVATE_KEY } = process.env;

module.exports = {
  PRODUCTION_ENV,
  NODE_PORT,
  NODE_HTTPS,
  NODE_HOST,
  NODE_URI,
  MONGO_URI,
  JWT_PRIVATE_KEY,
  // commonErrors,
};
