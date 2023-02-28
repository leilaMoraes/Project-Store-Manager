const { salesService } = require('../services');

const getSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();

  return res.status(type).json(message);
};

const getSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleById(id);
  return res.status(type).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.deleteSale(id);
  return res.status(type).json(message);
};

module.exports = { getSales, getSale, deleteSale };