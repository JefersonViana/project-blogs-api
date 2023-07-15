const { categoriesServices } = require("../services");

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: '"name" is required' });

  const createdCategory = await categoriesServices.createCategory(name);

  return res.status(201).json(createdCategory);
};

module.exports = {
  createCategory,
}