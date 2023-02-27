"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      siswa.belongsTo(models.spp, { as: "spp", foreignKey: "idSpp" });
      siswa.belongsTo(models.kelas, { as: "kelas", foreignKey: "idKelas" });
      siswa.hasMany(models.pembayaran, { as: "pembayaran", foreignKey: "idSpp" });
      siswa.hasMany(models.pembayaran, { as: "pembayaran1", foreignKey: "nisn" });
    }
  }
  siswa.init(
    {
      nisn: {
        type: DataTypes.CHAR,
        primaryKey: true
    },
      nis: DataTypes.CHAR,
      nama: DataTypes.STRING,
      idKelas: DataTypes.INTEGER,
      alamat: DataTypes.TEXT,
      noTelp: DataTypes.STRING,
      idSpp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "siswa",
    }
  );
  return siswa;
};
