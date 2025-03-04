const mongoose = require("mongoose");

const connectDB = async function () {
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log("Database connected");
};

module.exports = connectDB;