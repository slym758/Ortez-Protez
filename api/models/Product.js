const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    detail: { type: String, require: true },
    detail1: { type: String, require: true },
    detail2: { type: String, require: true },
    detail3: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
