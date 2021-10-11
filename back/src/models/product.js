const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nameProduct: String,
    priceProduct: Number,
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", DataSchema);
module.exports = Product;
