const { Model, DataTypes } = require('sequelize');

/**
 * Example model class
 */
class Example extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      age: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
  }
}

module.exports = Example;
