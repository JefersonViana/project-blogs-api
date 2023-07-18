module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull:false,
        type: DataTypes.STRING,
      },
      content: {
        allowNull:false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        foreignKey: true,
        type: DataTypes.INTEGER,
      },
      published: {
        allowNull: true,
        // defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
        type: DataTypes.DATE,
      },
      updated: {
        allowNull: true,
        // defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'),
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(
      models.User,
      { foreignKey: 'userId', as: 'users' },
    );
  };

  return BlogPost;
};