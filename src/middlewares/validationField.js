const { userService } = require('../services');

const validationField = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const responseService = await userService.getUserByEmail(email);

  if (!responseService) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  req.body.payload = responseService;

  return next();
};

module.exports = {
  validationField,
};
