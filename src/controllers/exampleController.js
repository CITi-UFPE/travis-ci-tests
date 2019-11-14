const { Example } = require('../models');

require('../database');

const detail = async (req, res, next) => {
  try {
    next();
  } catch (e) {
    next(e);
  }
};

const list = async (req, res, next) => {
  try {
    const examples = await Example.findAll();

    res.locals.data = examples;
    res.locals.code = 200;

    next();
  } catch (e) {
    next(e);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, age } = req.body;

    const example = await Example.create({ name, age });

    res.locals.data = example;
    res.locals.code = 201;

    next();
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    next();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  list,
  detail,
  create,
  remove,
};
