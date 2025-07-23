const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
const productRoute = require("./routes/productRoute");
const cors = require("cors");

require('dotenv').config();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: ["http://localhost:5173"],
};

const port = 8080;
app.use(cors(corsOptions));

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database");
    app.listen(port, () => {
      console.log(`Server starting on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connected error");
  });
