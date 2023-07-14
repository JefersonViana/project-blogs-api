const { createUser } = require('../utils/schemas');

const checkValuesFields = (req, res, next) => {
  const { password, displayName } = req.body;
  const { error } = createUser.validate({ password, displayName });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  return next();
};

module.exports = checkValuesFields;