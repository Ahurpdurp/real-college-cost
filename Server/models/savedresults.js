'use strict';
module.exports = (sequelize, DataTypes) => {
  const SavedResults = sequelize.define('SavedResults', {
    userId: DataTypes.STRING,
    userName: DataTypes.STRING,
    tuitionTotal: DataTypes.INTEGER,
    roomingTotal: DataTypes.INTEGER,
    textbookTotal: DataTypes.INTEGER,
    laptopTotal: DataTypes.INTEGER,
    carTotal: DataTypes.INTEGER,
    foodTotal: DataTypes.INTEGER,
    restaurantTotal: DataTypes.INTEGER,
    phoneTotal: DataTypes.INTEGER,
    internetTotal: DataTypes.INTEGER,
    healthTotal: DataTypes.INTEGER,
    carMaintTotal: DataTypes.INTEGER,
    spotifyTotal: DataTypes.INTEGER,
    amazonPrimeTotal: DataTypes.INTEGER,
    netflixTotal: DataTypes.INTEGER,
    drinkTotal: DataTypes.INTEGER,
    alcoholTotal: DataTypes.INTEGER,
    clubTotal: DataTypes.INTEGER,
    clothingTotal: DataTypes.INTEGER,
    videoTotal: DataTypes.INTEGER,
    customTotal: DataTypes.INTEGER
  }, {});
  SavedResults.associate = function(models) {
    // associations can be defined here
  };
  return SavedResults;
};