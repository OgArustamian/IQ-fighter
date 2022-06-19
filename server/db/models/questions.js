const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Themes, Answers }) {
      // define association here
      this.belongsTo(Themes, { foreignKey: 'theme_id' });
      this.hasMany(Answers, { foreignKey: 'question_id' });
    }
  }
  Questions.init({
    question: DataTypes.STRING,
    isAnswered: DataTypes.BOOLEAN,
    difficulty: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};
