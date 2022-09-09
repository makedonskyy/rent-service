module.exports = {
  async up(queryInterface, Sequelize) {
    const ownArr = [
      // {
      //   name: 'Ирина',
      //   email: 'irina@mail.ru',
      //   password: '123',
      //   phone: '+79208631070',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: 'Сергей',
      //   email: 'serg@ya.ru',
      //   password: '4455',
      //   phone: '+78005553535',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      // {
      //   name: 'Наталия',
      //   email: 'natali@ya.ru',
      //   password: '123',
      //   phone: '+79006016630',
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
      {
        name: 'Павел',
        email: 'pashka@google.com',
        password: '123',
        phone: '+7934557710',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Owners', ownArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Owners', null, {});
  },
};
