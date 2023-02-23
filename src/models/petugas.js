'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petugas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  petugas.init({
    idPetugas: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    namaPetugas: DataTypes.STRING,
    level: DataTypes.ENUM
  }, {
    sequelize,
    modelName: 'petugas',
  });
  return petugas;
};