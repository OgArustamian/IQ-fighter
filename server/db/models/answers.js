const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Questions }) {
      // define association here
      this.belongsTo(Questions, { foreignKey: 'question_id' });
    }
  }
  Answers.init({
    answer: DataTypes.STRING,
    isTrue: DataTypes.BOOLEAN,
    question_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};
