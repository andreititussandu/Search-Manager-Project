const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Importă obiectul Sequelize

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
