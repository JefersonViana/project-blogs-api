const { blogPostServices } = require('../services');

const getPostsByUserId = async (req, res) => {
  const getPostsUser = await blogPostServices.getPostsByUserId();

  return res.status(200).json(getPostsUser);
};

const createBlogPost = async (req, res) => {
  const { payload } = req;
  const userId = payload.id;
  const createdBlogPost = await blogPostServices.createBlogPost(req.body, userId);

  return res.status(201).json(createdBlogPost);
};

module.exports = {
  createBlogPost,
  getPostsByUserId,
};
