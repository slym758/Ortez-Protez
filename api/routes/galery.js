const Galery = require("../models/Galery.js");
const express = require("express");
const router = express.Router();

router.get("/get-galery-all", async (req, res) => {
  try {
    const galerys = await Galery.find();
    res.status(200).json(galerys);
  } catch (error) {
    console.log(error);
  }
});

router.post("/add-galery", async (req, res) => {
  try {
    const newGalery = new Galery(req.body);
    await newGalery.save();
    res.status(200).json("Ürün Eklendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/update-galery", async (req, res) => {
  try {
    await Galery.findOneAndUpdate({ _id: req.body.galeryId }, req.body);
    res.status(200).json("Ürün Güncellendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/delete-galery", async (req, res) => {
  try {
    await Galery.findOneAndDelete({ _id: req.body.galeryId });
    res.status(200).json("Ürün Silindi");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
