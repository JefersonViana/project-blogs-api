const express = require('express');
const { userController } = require('../controllers');
const checkValuesFields = require('../middlewares/checkValuesFields');
const checkEmail = require('../middlewares/checkEmail');
const validateToken = require('../middlewares/validateToken');

const userRoute = express();

userRoute.get('/', validateToken, userController.getAllUsers);
userRoute.get('/:id', validateToken, userController.getUserById);
userRoute.post('/', checkValuesFields, checkEmail, userController.createUser);

module.exports = userRoute;