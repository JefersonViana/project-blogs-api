const { categoriesServices } = require('../services');

const categoriesExists = async (array) => {
  const response = await Promise.all(array.map(async (id) => {
    const category = await categoriesServices.getCategoryById(id);
    if (category === null) {
      return false;
    }
    return typeof category === 'object';
  }));
  return response.every((bolean) => bolean === true);
};

const validateCategoriesExists = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) return res.status(400).json({ message: 'Some required fields are missing' });
  
  const exists = await categoriesExists(categoryIds);
  if (!(Array.isArray(categoryIds)) || !exists) return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  

  // const createdBlogPost = await categoriesServices.createBlogPost(req.body);

  // return res.status(201).json(createdBlogPost);
  if (content) return res.status(201).json(exists);
  next()
};

module.exports = {
  validateCategoriesExists,
};
