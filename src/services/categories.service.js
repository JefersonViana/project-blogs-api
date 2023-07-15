const { Category } = require('../models');

const createCategory = async (name) => {
  const createdCategory = await Category.create({ name });
  return createdCategory;
}

module.exports = {
  createCategory,
};
