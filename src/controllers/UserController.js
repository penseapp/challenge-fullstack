const connection = require('../database/connection');
const tokenGenerator = require('../util/tokenGenerator');

module.exports = {
  async get(req, res) {
    const {id} = req.query;
    const authorization = req.headers.authorization;

    if (!id) {
      const userList = await connection('user')
        .select('*');

      return res.json(userList);

    } else {
      const userListId = await connection('user')
        .select('*')
        .where('id', id);

      return res.json(userListId);
    }
  },

  async post(req, res) {
    const {name, email, password} = req.body;
    const authorization = req.headers.authorization;
    const token = tokenGenerator();

    await connection('user')
      .insert({
        name,
        token,
        email,
        password
      });

    return res.json({success: true});
  },

  async put(req, res) {
    const {id} = req.params;
    const {name, email, password} = req.body;
    const authorization = req.headers.authorization;

    await connection('user')
      .where('id', id)
      .update({
        name,
        email,
        password
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
    const {name, email, password} = req.body;
    const authorization = req.headers.authorization;

    await connection('user')
      .where('id', id)
      .update({
        name,
        email,
        password
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

    const userDeleteId = await connection('user')
      .where('id', id)
      .select('id')
      .first();

    if (parseInt(userDeleteId.id) !== parseInt(authorization)) {
      return res.status(401).json({success: false});
    }

    try {
      await connection('user')
      .where('id', id)
      .delete();

      return res.status(204).json({success: true});

    } catch(error) {
      console.log(error);

      return res.status(401).json({success: false});
    }
  }
}
