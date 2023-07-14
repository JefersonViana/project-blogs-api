const Joi = require('joi');

const createUser = Joi.object({
  displayName: Joi.string().min(8)
    .message('"displayName" length must be at least 8 characters long'),
  password: Joi.string().min(6)
    .message('"password" length must be at least 6 characters long'),
});

module.exports = {
  createUser,
};
