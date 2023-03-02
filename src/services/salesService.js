const { salesModel } = require('../models');

const OK = 200;
const NOT_FOUND = 404;
const MESSAGE = { message: 'Sale not found' };
const DELETED = 204;
const CREATED = 201;

const getAllSales = async () => {
  const allSales = await salesModel.getAllSales();
  return { type: OK, message: allSales };
};

const getSaleById = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (sale.length) return { type: OK, message: sale };
  return { type: NOT_FOUND, message: MESSAGE };
};

const insertSale = async (products) => {
  const date = new Date();
  const saleId = await salesModel.insertSales(date);
  const itemsSold = await Promise.all(products.map(async (product) => {
    await salesModel.insertSalesProducts(saleId, product);
  }));
  return { type: CREATED, message: { saleId, itemsSold } };
};

const deleteSale = async (id) => {
  const sale = await salesModel.getSaleById(id);
  if (!sale.length) return { type: NOT_FOUND, message: MESSAGE };
  await salesModel.deleteSale(id);
  return { type: DELETED, message: '' };
};

module.exports = { getAllSales, getSaleById, deleteSale, insertSale };