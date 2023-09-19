const mongoose = require("mongoose");

const GalerySchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    img: { type: String, require: true },
  },
  { timestamps: true }
);

const Galery = mongoose.model("galery", GalerySchema);
module.exports = Galery;
