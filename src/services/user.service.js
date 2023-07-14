const { User } = require('../models');

const getUserByEmail = async (email) => {
  const responseModel = await User.findOne({
    where: { email },
  });

  return responseModel;
};

const createUser = async ({ email, displayName, password, image = null }) => {
  const createdUser = await User.create({ email, displayName, password, image })

  return createdUser;
};

module.exports = {
  getUserByEmail,
  createUser,
};
