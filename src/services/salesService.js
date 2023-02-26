const { salesModel } = require('../models');

const OK = 200;
const NOT_FOUND = 404;

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return { type: OK, message: allSales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (sale) return { type: OK, message: sale };
  return { type: NOT_FOUND, message: 'Sale not found' };
};

module.exports = { getAllSales, getSaleById };