module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(
      models.BlogPost,
      { foreignKey: 'postId', as: 'blogPost', through: PostCategory, otherKey: 'categoryId' },
    );

    models.BlogPost.belongsToMany(
      models.Category,
      { foreignKey: 'categoryId', as: 'categories', through: PostCategory, otherKey: 'postId' },
    );
  };

  return PostCategory;
};