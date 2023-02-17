const { productsModels } = require('../models');

const NOT_FOUND = 404;

const getAllProducts = async () => {
  const allProducts = await productsModels.getAllProducts();
  return { type: null, message: allProducts };
};

const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  if (product) return { type: null, message: product };
  return { type: NOT_FOUND, message: 'Product not found' };
};

module.exports = { getAllProducts, getProductById };