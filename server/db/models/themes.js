const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Themes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Questions }) {
      // define association here
      this.hasMany(Questions, { foreignKey: 'theme_id' });
    }
  }
  Themes.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Themes',
  });
  return Themes;
};
