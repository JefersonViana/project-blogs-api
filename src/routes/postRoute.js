const express = require('express');
const validateToken = require('../middlewares/validateToken');
const { blogPostController } = require('../controllers');
const { validateCategoriesExists } = require('../middlewares/validateCategoriesExists');

const postRoute = express();

// postRoute.get('/', validateToken, blogPostController.getAllBlogPosts);
postRoute.post('/', validateToken, validateCategoriesExists, blogPostController.createBlogPost);

module.exports = postRoute;