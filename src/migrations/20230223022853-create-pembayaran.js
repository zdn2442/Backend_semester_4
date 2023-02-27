'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pembayarans', {
      idPembayaran: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      idPetugas: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: "petugas",
          key: "idPetugas",
          as: "idPetugas"
        },
        allowNull: false
      },
      nisn: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: "siswas",
          key: "nisn",
          as: "nisn"
        },
        allowNull: false
      },
      tglBayar: {
        type: Sequelize.DATE,
        allowNull: false
      },
      bulanDibayar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tahunDibayar: {
        type: Sequelize.STRING,
        allowNull: false
      },
      idSpp: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: "siswas",
          key: "idSpp",
          as: "idSpp"
        },
        allowNull: false
      },
      jumlahBayar: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pembayarans');
  }
};