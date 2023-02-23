const { productsService } = require('../services');

const OK = 200;

const getProducts = async (_req, res) => {
  const { type, message } = await productsService.getAllProducts();

  return res.status(type).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);

  if (type) return res.status(type).json({ message });

  return res.status(OK).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.insertProduct(name);
  return res.status(type).json({ message });
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);

  return res.status(type).json({ message });
};

module.exports = { getProducts, getProduct, deleteProduct, insertProduct };