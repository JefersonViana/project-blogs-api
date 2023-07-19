const { User } = require('../models');

const getUserByEmail = async (email) => {
  const responseModel = await User.findOne({
    where: { email },
  });

  return responseModel;
};

const getAllUsers = async () => {
  const responseModel = await User.findAll({ attributes: { exclude: ['password'] } });
  return responseModel;
};

const getUserById = async (id) => {
  const responseModel = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  return responseModel;
};

const createUser = async ({ email, displayName, password, image = null }) => {
  const createdUser = await User.create({ email, displayName, password, image });

  return createdUser;
};

const deleteUserById = async (id) => {
  const response = await User.destroy({ where: { id } });
  return response;
};

module.exports = {
  getUserByEmail,
  createUser,
  getAllUsers,
  getUserById,
  deleteUserById,
};
