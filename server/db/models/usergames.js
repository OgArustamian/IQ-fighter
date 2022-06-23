const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserGames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Game }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Game, { foreignKey: 'game_id' });
    }
  }
  UserGames.init({
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserGames',
  });
  return UserGames;
};
