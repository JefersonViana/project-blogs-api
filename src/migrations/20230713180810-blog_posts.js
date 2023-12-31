'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blog_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull:false,
        type: Sequelize.STRING,
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
      },
      published: {
        allowNull: true,
        defaultValue: new Date(),
        type: Sequelize.DATE,
      },
      updated: {
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
