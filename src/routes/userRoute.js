const express = require('express');
const { userController } = require('../controllers');
const checkValuesFields = require('../middlewares/checkValuesFields');
const checkEmail = require('../middlewares/checkEmail');

const userRoute = express();

userRoute.get('/', userController.getAllUsers);
userRoute.post('/', checkValuesFields, checkEmail, userController.createUser);

module.exports = userRoute;