const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, UserGames, Turn }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'winner_id' });
      this.hasMany(UserGames, { foreignKey: 'game_id' });
      this.hasMany(Turn, { foreignKey: 'game_id' });
    }
  }
  Game.init({
    winner_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
