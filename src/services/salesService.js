const { salesModel } = require('../models');

const OK = 200;
const NOT_FOUND = 404;
const MESSAGE = { message: 'Sale not found' };

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return { type: OK, message: allSales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (sale.length) return { type: OK, message: sale };
  return { type: NOT_FOUND, message: MESSAGE };
};

module.exports = { getAllSales, getSaleById };