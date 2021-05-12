const connection = require('../database/connection');

module.exports = {
  async get(req, res) {
    const {id, orderPrice, orderAlpha, search, promotional} = req.query;
    const authorization = req.headers.authorization;

    if (id) {
      if (orderPrice) {
        // COM ID e ORDEM PREÇO
        const productList = await connection('product')
          .select('*')
          .where('id', id)
          .orderBy('price', orderPrice);

        return res.json(productList);
      
      } else if (orderAlpha) {
        // COM ID e ORDEM ALFABETICA
        const productList = await connection('product')
          .select('*')
          .where('id', id)
          .orderBy('name', orderAlpha);

        return res.json(productList);

      } else if (search) {
        // COM ID e PESQUISA
        const productList = await connection('product')
          .select('*')
          .where('id', id)
          .andWhere('name', 'like', `%${search}%`);

        return res.json(productList);

      } else if (promotional) {
        // COM ID e PROMOCIONAL
        const productList = await connection('product')
          .select('*')
          .where('id', id)
          .groupBy('id')
          .having('promotional_price', '>', 0);

        return res.json(productList);

      } else {
        // COM ID
        const productList = await connection('product')
          .select('*')
          .where('id', id);

        return res.json(productList);
      }

    } else {
      if (orderPrice) {
        // SEM ID e ORDEM PREÇO
        const productList = await connection('product')
          .select('*')
          .orderBy('price', orderPrice);

        return res.json(productList);
      
      } else if (orderAlpha) {
        // SEM ID e ORDEM ALFABETICA
        const productList = await connection('product')
          .select('*')
          .orderBy('name', orderAlpha);

        return res.json(productList);

      } else if (search) {
        // SEM ID e PESQUISA
        const productList = await connection('product')
          .select('*')
          .andWhere('name', 'like', `%${search}%`);

        return res.json(productList);

      } else if (promotional) {
        // SEM ID e PROMOCIONAL
        const productList = await connection('product')
          .select('*')
          .groupBy('id')
          .having('promotional_price', '>', 0);

        return res.json(productList);

      } else {
        // SEM ID
        const productList = await connection('product')
          .select('*');

        return res.json(productList);
      }
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

    console.log({name, description, price, promotional_price, status_flag, category});

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
