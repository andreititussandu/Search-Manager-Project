const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Importă obiectul Sequelize

const Result = sequelize.define('Result', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Result;
