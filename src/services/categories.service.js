const { Category } = require('../models');

const getAllCategories = async () => {
  const createdCategory = await Category.findAll();
  return createdCategory;
};

const createCategory = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory;
};

module.exports = {
  createCategory,
  getAllCategories,
};
