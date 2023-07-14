const jwt = require('jsonwebtoken');
const { userService } = require('../services');

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

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { email, displayName, password, image } = req.body;
  const userExist = await userService.getUserByEmail(email);

  if (userExist) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const createdUser = await userService.createUser({ email, displayName, password, image });

  const token = jwt.sign({ ...createdUser }, secret, config);
  return res.status(201).json({ token });
};

module.exports = {
  getUserByEmail,
  createUser,
  getAllUsers,
  getUserById,
};
