const express = require('express');
const { userController } = require('../controllers');
const { validationField } = require('../middlewares/validationField');

const loginRoute = express();

loginRoute.post('/', validationField, userController.getUserByEmail);

module.exports = loginRoute;