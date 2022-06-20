module.exports = {
  async up(queryInterface, Sequelize) {
    const themes = [
      { title: 'кино', createdAt: new Date(), updatedAt: new Date() },
      { title: 'компьютеры', createdAt: new Date(), updatedAt: new Date() },
      { title: 'эрудиция', createdAt: new Date(), updatedAt: new Date() },
      { title: 'vanilla JS', createdAt: new Date(), updatedAt: new Date() },
    ];
    await queryInterface.bulkInsert('Themes', themes, {});
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
