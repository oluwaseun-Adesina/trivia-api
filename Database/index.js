require("dotenv").config();
const mongoose = require("mongoose");

const startConnection = async () => {
  try {
    // Create mongoDB connection using specified connection url
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("successfully connected to database");
    //
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { startConnection };
