const { blogPostServices } = require('../services');

// const getAllCategories = async (req, res) => {
//   const allCategories = await categoriesServices.getAllCategories();

//   return res.status(200).json(allCategories);
// };

const createBlogPost = async (req, res) => {
  const { payload } = req;
  const userId = payload.id;
  const createdBlogPost = await blogPostServices.createBlogPost(req.body, userId);

  return res.status(201).json(createdBlogPost);
};

module.exports = {
  createBlogPost,
  // getAllCategories,
};
