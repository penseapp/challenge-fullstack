const connection = require('../database/connection');
const tokenGenerator = require('../util/tokenGenerator');

module.exports = {
  async get(req, res) {
    const email = req.headers.email;
    const password = req.headers.password;

    const userToken = await connection('user')
      .select('token')
      .where('email', email)
      .andWhere('password', password)
      .first();

    if (!userToken) {
      return res.status(404).json({success: false});
    }

    return res.json(userToken);
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
