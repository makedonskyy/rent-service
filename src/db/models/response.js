const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Appartment }) {
      // define association here
      this.belongsTo(Appartment, { foreignKey: 'appartmentId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Response.init({
    appartmentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Response',
  });
  return Response;
};
