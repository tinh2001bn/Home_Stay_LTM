require("dotenv").config();

const productData = require("./data/products");
const userData = require("./data/user");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const users = require("./models/User")

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);
    
    await users.deleteMany({});

    await users.insertMany(userData);
    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
