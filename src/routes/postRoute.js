const express = require('express');
const validateToken = require('../middlewares/validateToken');
const { blogPostController } = require('../controllers');
const { validateCategoriesExists } = require('../middlewares/validateCategoriesExists');
const checkIfUserHasAuthorization = require('../middlewares/checkIfUserHasAuthorization');

const postRoute = express();

postRoute.get('/', validateToken, blogPostController.getAllPosts);
postRoute.get('/:id', validateToken, blogPostController.getPostById);
postRoute.put('/:id', validateToken, checkIfUserHasAuthorization, blogPostController.putPostById);
postRoute.post('/', validateToken, validateCategoriesExists, blogPostController.createBlogPost);

module.exports = postRoute;