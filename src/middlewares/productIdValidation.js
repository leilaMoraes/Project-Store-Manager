const { productsModels } = require('../models');

module.exports = async (req, res, next) => {
  const products = req.body;
  if (products.every(({ productId }) => productId === undefined)) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (products.length === 1 && !products.productId) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const hasProduct = await Promise.all(products.map(async ({ productId }) => {
    const product = await productsModels.getProductById(productId);
    return product;
  }));
  if (!hasProduct.every((product) => product)) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return next();
};