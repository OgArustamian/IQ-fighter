require('dotenv').config();
const bcrypt = require('bcrypt');
const { seedWin } = require('../../seedGames');

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
    await queryInterface.bulkInsert('Users', [
      {
        username: 'Sam Doe',
        email: 'Sam@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'John Doe',
        email: 'John@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Haru6aTop69',
        email: 'killer@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Chuck Norris',
        email: 'ChuckNorris@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Elon Reeve Musk',
        email: 'paypall@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Kim Jong Un',
        email: 'kim4ik@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Olga Buzova',
        email: 'buzova@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Jack Ma',
        email: 'JackMa@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Aleksander Borodach',
        email: 'Borodach@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Bruce Lee',
        email: 'BruceLee@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Garry Kasparov',
        email: 'Kasparov@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        username: 'Doe',
        email: 'Doe@live.com',
        password: await bcrypt.hash('123', Number(process.env.SALTROUND)),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

    await queryInterface.bulkInsert('Games', seedWin, {});

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
