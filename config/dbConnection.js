const mongoose = require("mongoose");
const { configDotenv } = require("dotenv");
configDotenv();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Foody",
    });
    console.log("Database connected successfully!");

  } catch (error) {
    console.error("Database connection failed:", error.message);
    // Optionally throw the error so it can be handled at a higher level
    throw error;
  }
};

module.exports = { dbConnection };

