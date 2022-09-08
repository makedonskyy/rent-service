module.exports = {
  async up(queryInterface, Sequelize) {
    const apartArr = [
      {
        ownerId: 1,
        cathegoryId: 1,
        price: 40000,
        countOfRooms: 1,
        address: 'Москва, ул. Цимлянская, д. 5',
        description: 'Сдается просторная, светлая, уютная квартира по привлекательной цене рядом с метро! Есть все необходимое для комфортного проживания: шкафы, кровати, кухонная мебель, холодильник, стиральная машина. Окна выходят в тихий, зелёный двор. Интеллигентные, дружные соседи. Развитая инфраструктура, рядом магазины, школа, колледж, больница, парковка, торговые центры',
        image: 'https://bouw.ru/wp-content/uploads/2021/10/36-1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 2,
        cathegoryId: 3,
        price: 12000,
        countOfRooms: 1,
        address: 'Москва, ул. Яблочная, д. 35',
        description: 'Сдам комнату в 1 минуте от метро Менделеевская, в очень хорошем состоянии в малонаселенной квартире в соседних комнатах проживает один молодой мужчина и пожилая женщина. Для одного человека. В услугах риелтора не нуждаюсь. Просьба звонить с 10.00 до 22.00.',
        image: 'https://arhitektfoto.ru/wp-content/uploads/spalnya-v-apartementah-oko-02.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 3,
        cathegoryId: 2,
        price: 120000,
        countOfRooms: 5,
        address: 'Москва, ул. Строителей, д. 2',
        description: 'Предлагается в аренду двух этажный дом в уникальном месте, рядом с метро.  После косметического ремонта. На первом этаже расположились две просторные комнаты, санузел, кухня. На втором этаже три комнаты с большими окнами. На чердаке можно организовать дополнительное жилое пространство. Дом расположен на участке 10 соток. Огороженная территория. Развитая инфраструктура.',
        image: 'https://i.pinimg.com/originals/50/a9/8f/50a98f3608b6f992f6b68154c743f423.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Appartments', apartArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Appartments', null, {});
  },
};
