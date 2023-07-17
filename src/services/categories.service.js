const { Category } = require('../models');

const getAllCategories = async () => {
  const createdCategory = await Category.findAll();
  return createdCategory;
};

const getCategoryById = async (id) => {
  const getCategory = await Category.findByPk(id);
  return getCategory;
};

const createCategory = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory;
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
};
