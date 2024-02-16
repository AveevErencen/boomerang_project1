/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Heros', [
      { emoji: '🤠', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🥸', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '😺', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👨', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🧔', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👶', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👩‍🦰', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🧑‍🦱', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👩', createdAt: new Date(), updatedAt: new Date() },

    ], {});
    await queryInterface.bulkInsert('Enemies', [
      { emoji: '👾', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '💀', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👹', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👻', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👽', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '👿', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '💩', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🤡', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🤺', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🧛', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🧟', createdAt: new Date(), updatedAt: new Date() },
      { emoji: '🎃', createdAt: new Date(), updatedAt: new Date() },
    ], {});
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
