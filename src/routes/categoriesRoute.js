const express = require('express');
const validateToken = require('../middlewares/validateToken');
const { categoriesController } = require('../controllers');

const categoriesRoute = express();

categoriesRoute.post('/', validateToken, categoriesController.createCategory);

module.exports = categoriesRoute;