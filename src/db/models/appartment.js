'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appartment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appartment.init({
    ownerId: DataTypes.INTEGER,
    cathegoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    countOfRooms: DataTypes.INTEGER,
    address: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appartment',
  });
  return Appartment;
};