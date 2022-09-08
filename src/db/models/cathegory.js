const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cathegory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Appartment }) {
      // define association here
      this.hasMany(Appartment, { foreignKey: 'cathegoryId' });
    }
  }
  Cathegory.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cathegory',
  });
  return Cathegory;
};
