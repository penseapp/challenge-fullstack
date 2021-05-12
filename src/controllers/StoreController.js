const connection = require('../database/connection');

module.exports = {
  async get(req, res) {
    const {id} = req.query;
    const authorization = req.headers.authorization;

    if (!id) {
      const storeList = await connection('store')
        .select('*');

      return res.json(storeList);

    } else {
      const storeListId = await connection('store')
        .select('*')
        .where('id', id);

      return res.json(storeListId);
    } 
  },

  async post(req, res) {
    const {name, description} = req.body;

    const authorization = req.headers.authorization;

    await connection('store')
      .insert({
        name,
        description
      });

    return res.json({success: true});
  },

  async put(req, res) {
    const {id} = req.params;
    const {name, description} = req.body;
    const authorization = req.headers.authorization;

    await connection('store')
      .where('id', id)
      .update({
        name,
        description
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
    const {name, description} = req.body;
    const authorization = req.headers.authorization;

    await connection('store')
      .where('id', id)
      .update({
        name,
        description
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

    const storeDeleteId = await connection('store')
      .where('id', id)
      .select('id')
      .first();

    if (parseInt(storeDeleteId.id) !== parseInt(authorization)) {
      return res.status(401).json({success: false});
    }

    try {
      await connection('store')
      .where('id', id)
      .delete();

      return res.status(204).json({success: true});

    } catch(error) {
      console.log(error);

      return res.status(401).json({success: false});
    }
  }
}
