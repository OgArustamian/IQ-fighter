require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      username: 'John Doe',
      email: 'John@live.com',
      password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'Sam Doe',
      email: 'Sam@live.com',
      password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});

    await queryInterface.bulkInsert('Games', [{
      winner_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

    await queryInterface.bulkInsert('UserGames', [{
      user_id: 1,
      game_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 2,
      game_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
