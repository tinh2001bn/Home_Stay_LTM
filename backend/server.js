// require("dotenv").config();
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
connectDB();
const route =require('./routes')

const app = express();

app.use(express.json());

// app.use("/api/products", productRoutes);
// middle để xử lý dữ liệu ta post từ client đến server
app.use(express.urlencoded({
  extended: true
 }));
 // route init
 route(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
