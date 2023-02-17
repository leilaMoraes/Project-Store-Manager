const productsModels = require('../models/productsModels');

const getAllProducts = async () => {
  const allProducts = await productsModels.getAllProducts();
  return { type: null, message: allProducts };
};

module.exports = { getAllProducts };