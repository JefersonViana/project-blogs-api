const { BlogPost, User, sequelize, PostCategory, Category } = require('../models');
// const Sequelize = require('sequelize');
// const config = require('../config/config');
// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize(config[env]);

const getPostsByUserId = async () => {
  const response = await BlogPost.findAll(
    { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
);
  return response;
};

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const response = await sequelize.transaction(async (t) => {
    const createdPost = await BlogPost.create(
      { title, content, userId, published: new Date(), updated: new Date() },
      { transaction: t },
    );
    
    await Promise.all(categoryIds.map(async (categoryId) => (
      PostCategory.create({ postId: createdPost.id, categoryId }, { transaction: t })
    )));
    return createdPost;
  });
  return response;
};

module.exports = {
  createBlogPost,
  getPostsByUserId,
};
