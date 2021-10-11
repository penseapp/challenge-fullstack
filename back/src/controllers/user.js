const Users = require("../models/user");
// const params = require('params');

module.exports = {
  async index(req, res) {
    const user = await Users.find();
    res.json(user);
  },
  async create(req, res) {
    const { email, password } = req.body;

    let data = {};
    let user = await Users.findOne({ email });

    if (!user) {
      data = { email, password };

      user = await Users.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },
  async delete(req, res) {
    try {
      const { id: _id } = req.params;
      const user = await Users.findByIdAndRemove(_id);

      return res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: "Error" });
    }
  },
  async show(req, res) {
    try {
      const { id: _id } = req.params;
      const user = await Users.findById(_id);

      return res.send({ user });
    } catch (err) {
      return res.status(400).send({ error: "Error" });
    }
  },
  async update(req, res) {
    try {
      const { email, password } = req.body;
      const { id: _id } = req.params;

      let data = { email, password };

      const user = await Users.findByIdAndUpdate(_id, data, { new: true });
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(user);
    }
  },
};
