const productsService = require('../services');

const OK = 200;

const getProducts = async (_req, res) => {
  const { type, message } = await productsService.getAllProducts();

  if (type) return res.status(type).json(message);

  return res.status(OK).json(message);
};

module.exports = { getProducts };