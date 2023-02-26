const { salesService } = require('../services');

const getSales = async (_req, res) => {
  const { type, message } = await salesService.getAllSales();

  return res.status(type).json(message);
};

module.exports = { getSales };