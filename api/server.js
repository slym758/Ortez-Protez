const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//TODO: ROUTES

const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");
const galeryRoute = require("./routes/galery.js");
const authRoute = require("./routes/auth.js");

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("mongodb çalıştı");
  } catch (error) {
    throw error;
  }
};

//middlewar

app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/galery", galeryRoute);
app.use("/api/auth", authRoute);

// app.get("/", (req, res) => res.send("Merhaba"));

app.listen(port, () => {
  connect();
  console.log(`sunucu ${port} portunda çalıştı`);
});
