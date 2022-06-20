module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserTurns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      turn_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Turns',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      isTrue: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserTurns');
  },
};
