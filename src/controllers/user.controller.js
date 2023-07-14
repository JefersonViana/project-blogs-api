const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;
const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const getUserByEmail = async (req, res) => {
  const { payload } = req.body;
  
  const token = jwt.sign({ ...payload }, secret, config);
  return res.status(200).json({ token });
};

module.exports = {
  getUserByEmail,
};
