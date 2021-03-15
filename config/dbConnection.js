const mongoose = require("mongoose");
const { MONGO_URI } = require("./index");
console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

module.exports.getDBConnection = async () => {
  try {
    await mongoose.connect(MONGO_URI, options);
    console.info("MongoDB Connected");
  } catch (err) {
    console.info(err.message);
  }
};
