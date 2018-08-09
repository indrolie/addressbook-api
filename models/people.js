'use strict';
module.exports = (sequelize, DataTypes) => {
  var people = sequelize.define('people', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber: DataTypes.STRING
  }, {});
  people.associate = function(models) {
    // associations can be defined here
  };
  return people;
};