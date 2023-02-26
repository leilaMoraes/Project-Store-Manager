const { salesModel } = require('../models');

const OK = 200;

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return { type: OK, message: allSales };
};

module.exports = { getAllSales };