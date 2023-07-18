const { BlogPost, PostCategory, sequelize } = require('../models');
// const Sequelize = require('sequelize');
// const config = require('../config/config');
// const env = process.env.NODE_ENV || 'development';
// const sequelize = new Sequelize(config[env]);

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  const response = await sequelize.transaction(async (t) => {
    const createdPost = await BlogPost.create(
      { title, content, userId },
      {
        transaction: t,
        // include: [
        //   { model: PostCategory, as: 'categories' },
        // ],
      },
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
};
