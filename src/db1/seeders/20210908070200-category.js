module.exports = {
  async up(queryInterface, Sequelize) {
    const catArr = [
      {
        name: 'Квартира',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Дом',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Комната',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Cathegories', catArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cathegories', null, {});
  },
};
