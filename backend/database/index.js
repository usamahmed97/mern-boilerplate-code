const mongoose = require("mongoose");
const { MONGODB_CONNECTION_STRING } = require("../config/index");

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log(`Database connected to host: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Database connection error: ${error}`);
  }
};

module.exports = dbConnect;
