const Sequelize = require('sequelize');
const models = require('../models');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

Object
  .values(models)
  .forEach((model) => model.init(connection));

Object
  .values(models)
  .forEach((model) => model.associate(models));
