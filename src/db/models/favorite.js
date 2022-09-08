const {
  Model,
} = require('sequelize');
const appartment = require('./appartment');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ User, Appartment }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Appartment, { foreignKey: 'appartmentId' });
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,

    appartmentId: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
