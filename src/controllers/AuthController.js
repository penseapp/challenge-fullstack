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
  }
}
