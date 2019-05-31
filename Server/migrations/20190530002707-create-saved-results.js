'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SavedResults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },
      schoolName: {
        type: Sequelize.STRING
      },
      tuitionTotal: {
        type: Sequelize.INTEGER
      },
      roomingTotal: {
        type: Sequelize.INTEGER
      },
      textbookTotal: {
        type: Sequelize.INTEGER
      },
      laptopTotal: {
        type: Sequelize.INTEGER
      },
      carTotal: {
        type: Sequelize.INTEGER
      },
      foodTotal: {
        type: Sequelize.INTEGER
      },
      restaurantTotal: {
        type: Sequelize.INTEGER
      },
      phoneTotal: {
        type: Sequelize.INTEGER
      },
      internetTotal: {
        type: Sequelize.INTEGER
      },
      healthTotal: {
        type: Sequelize.INTEGER
      },
      carMaintTotal: {
        type: Sequelize.INTEGER
      },
      spotifyTotal: {
        type: Sequelize.INTEGER
      },
      amazonPrimeTotal: {
        type: Sequelize.INTEGER
      },
      netflixTotal: {
        type: Sequelize.INTEGER
      },
      drinkTotal: {
        type: Sequelize.INTEGER
      },
      alcoholTotal: {
        type: Sequelize.INTEGER
      },
      clubTotal: {
        type: Sequelize.INTEGER
      },
      clothingTotal: {
        type: Sequelize.INTEGER
      },
      videoTotal: {
        type: Sequelize.INTEGER
      },
      customTotal: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SavedResults');
  }
};