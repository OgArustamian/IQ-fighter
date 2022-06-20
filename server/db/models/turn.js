const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Turn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Game, Questions, UserTurn }) {
      // define association here
      this.belongsTo(Game, { foreignKey: 'game_id' });
      this.belongsTo(Questions, { foreignKey: 'question_id' });
      this.hasMany(UserTurn, { foreignKey: 'turn_id' });
    }
  }
  Turn.init({
    game_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    difficulty: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Turn',
  });
  return Turn;
};
