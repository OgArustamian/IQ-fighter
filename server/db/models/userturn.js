const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTurn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Turn }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Turn, { foreignKey: 'turn_id' });
    }
  }
  UserTurn.init({
    user_id: DataTypes.INTEGER,
    turn_id: DataTypes.INTEGER,
    isTrue: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'UserTurn',
  });
  return UserTurn;
};
