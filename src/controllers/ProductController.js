const connection = require('../database/connection');

module.exports = {
  async get(req, res) {
    const {id} = req.query;
    const authorization = req.headers.authorization;

    if (!id) {
      const productList = await connection('product')
        .select('*');

      return res.json(productList);

    } else {
      const productListId = await connection('product')
        .select('*')
        .where('id', id);

      return res.json(productListId);
    }
  },

  async post(req, res) {
    const {name, description, price, promotional_price, status_flag, category} = req.body;
    const authorization = req.headers.authorization;

    await connection('product')
      .insert({
        name,
        description,
        price,
        promotional_price,
        status_flag,
        category
      });

    return res.json({success: true});
  },

  async put(req, res) {
    const {id} = req.params;
    const {name, description, price, promotional_price, status_flag, category} = req.body;
    const authorization = req.headers.authorization;

    await connection('product')
      .where('id', id)
      .update({
        name,
        description,
        price,
        promotional_price,
        status_flag,
        category
      })
      .then(rows => {
        if (!rows) {
          return res.status(404).json({success: false});
        }
        
        return res.json({success: true});
      })
      .catch(error => {
        return res.status(500).json({success: false});
      })
  },

  async patch(req, res) {
    const {id} = req.params;
    const {name, description, price, promotional_price, status_flag, category} = req.body;
    const authorization = req.headers.authorization;

    await connection('product')
      .where('id', id)
      .update({
        name,
        description,
        price,
        promotional_price,
        status_flag,
        category
      })
      .then(rows => {
        if (!rows) {
          return res.status(404).json({success: false});
        }
        
        return res.json({success: true});
      })
      .catch(error => {
        return res.status(500).json({success: false});
      })
  },

  async delete(req, res) {
    const {id} = req.params;
    const authorization = req.headers.authorization;

    const productDeleteId = await connection('product')
      .where('id', id)
      .select('id')
      .first();

    if (parseInt(productDeleteId.id) !== parseInt(authorization)) {
      return res.status(401).json({success: false});
    }

    try {
      await connection('product')
      .where('id', id)
      .delete();

      return res.status(204).json({success: true});

    } catch(error) {
      console.log(error);

      return res.status(401).json({success: false});
    }
  }
}
