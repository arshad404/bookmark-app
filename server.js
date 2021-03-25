const app = require("./index");
const { NODE_PORT, NODE_URI } = require("./config");

const { getDBConnection } = require("./config/dbConnection");
getDBConnection();

app.listen(NODE_PORT, () => {
  console.log(`Listening at ${NODE_URI}`);
});
