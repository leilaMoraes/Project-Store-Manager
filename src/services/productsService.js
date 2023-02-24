const { productsModels } = require('../models');

const NOT_FOUND = 404;
const DELETED = 204;
const OK = 200;
const CREATED = 201;

const getAllProducts = async () => {
  const allProducts = await productsModels.getAllProducts();
  return { type: OK, message: allProducts };
};

const getProductById = async (id) => {
  const product = await productsModels.getProductById(id);
  if (product) return { type: null, message: product };
  return { type: NOT_FOUND, message: 'Product not found' };
};

const insertProduct = async (name) => {
  const newProduct = await productsModels.insertProduct(name);
  return { type: CREATED, message: newProduct };
};

const updateProduct = async (name, id) => {
  const updated = await productsModels.updateProduct(name, id);
  return { type: OK, message: updated };
};

const deleteProduct = async (id) => {
  const product = await productsModels.getProductById(id);

  if (product === undefined) return { type: NOT_FOUND, message: 'Product not found' };

  await productsModels.deleteProduct(id);
  return { type: DELETED, message: '' };
};

module.exports = { getAllProducts, getProductById, deleteProduct, insertProduct, updateProduct };