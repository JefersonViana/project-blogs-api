const express = require('express');
const validateToken = require('../middlewares/validateToken');
const { blogPostController } = require('../controllers');
const { validateCategoriesExists } = require('../middlewares/validateCategoriesExists');
const checkIfUserHasAuthorization = require('../middlewares/checkIfUserHasAuthorization');
const validateFieldsToUpdateAnPost = require('../middlewares/validateFieldsToUpdateAnPost');

const postRoute = express();

postRoute.get('/', validateToken, blogPostController.getAllPosts);
postRoute.get('/search', validateToken, blogPostController.getAllPostsByQuery);
postRoute.get('/:id', validateToken, blogPostController.getPostById);
postRoute.post('/', validateToken, validateCategoriesExists, blogPostController.createBlogPost);
postRoute.put(
  '/:id',
  validateToken,
  validateFieldsToUpdateAnPost,
  checkIfUserHasAuthorization,
  blogPostController.putPostById,
);
postRoute.delete(
  '/:id',
  validateToken,
  checkIfUserHasAuthorization,
  blogPostController.deletePostById,
);

module.exports = postRoute;