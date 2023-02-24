const { productsModels } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const product = await productsModels.getProductById(id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  return next();
};