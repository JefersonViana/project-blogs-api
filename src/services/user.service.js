const { User } = require('../models');

const getUserByEmail = async (email) => {
  const responseModel = await User.findOne({
    where: { email },
  });

  return responseModel;
};

module.exports = {
  getUserByEmail,
};
