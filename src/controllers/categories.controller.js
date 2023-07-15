const { categoriesServices } = require('../services');

const getAllCategories = async (req, res) => {
  const allCategories = await categoriesServices.getAllCategories();

  return res.status(200).json(allCategories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const createdCategory = await categoriesServices.createCategory(name);

  return res.status(201).json(createdCategory);
};

module.exports = {
  createCategory,
  getAllCategories,
};
