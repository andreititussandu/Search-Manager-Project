const Sequelize = require('sequelize');
const { sequelize }= require('../db'); // Importă obiectul Sequelize

const Result = sequelize.define("Result", {
  id: { 
    type: Sequelize.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
},
title: Sequelize.STRING,
content: Sequelize.STRING,
});

module.exports = Result;
