// const { categoriesServices } = require('../services');

// const getAllCategories = async (req, res) => {
//   const allCategories = await categoriesServices.getAllCategories();

//   return res.status(200).json(allCategories);
// };

const createBlogPost = async (req, res) => {
  // const { title, content, categoryIds } = req.body;
  const { payload } = req;

  // if (!title || !content || !categoryIds) return res.status(400).json({ message: 'Some required fields are missing' });
  // // antes de acontecer a linha 14 eu preciso validar se as categorias existem.
  // if (Array.isArray(categoryIds)) return res.status(400).json({ message: 'one or more "categoryIds" not found' });

  // const createdBlogPost = await categoriesServices.createBlogPost(req.body);

  // return res.status(201).json(createdBlogPost);
};

module.exports = {
  createBlogPost,
  // getAllCategories,
};
