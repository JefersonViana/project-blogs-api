module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    },
  );

  // Category.associate = (models) => {
  //   Category.belongsToMany(
  //     models.BlogPost,
  //     { foreignKey: 'id', as: 'categories', through: models.PostCategory },
  //   );
  // };

  return Category;
};