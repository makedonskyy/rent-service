module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appartments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Owners',
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      cathegoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cathegories',
          key: 'id',
        },
        onDelete: 'cascade',
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      countOfRooms: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Appartments');
  },
};
