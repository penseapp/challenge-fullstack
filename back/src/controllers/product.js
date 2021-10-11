const Product = require("../models/product");
const params = require("params");

module.exports = {
  async index(req, res) {
    try {
      const products = await Product.find();
      return res.send({ products });
    } catch (err) {
      return res.status(400).send({ error: "Error" });
    }
  },
  async create(req, res) {
    const { nameProduct, priceProduct } = req.body;

    let data = {};
    let product = await Product.findOne({ nameProduct });

    if (!product) {
      data = { nameProduct, priceProduct };

      product = await Product.create(data);
      return res.status(200).json(product);
    } else {
      return res.status(500).json(product);
    }
  },
  async show(req, res) {
    try {
      const { id: _id } = req.params;
      const product = await Product.findById(_id);

      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ error: "Error" });
    }
  },
  async delete(req, res) {
    try {
      const { id: _id } = req.params;
      const product = await Product.findByIdAndRemove(_id);

      return res.send({ product });
    } catch (err) {
      return res.status(400).send({ error: "Error" });
    }
  },
  async update(req, res) {
    try {
      const { nameProduct, priceProduct } = req.body;
      const { id: _id } = req.params;

      let data = { nameProduct, priceProduct };

      const product = await Product.findByIdAndUpdate(_id, data, { new: true });

      return res.status(200).json(product);
    } catch (err) {
      return res.status(500).json(product);
    }
  },
};
