const { allProducts } = require("../models/mock");

const allProductsService = { type: null, message: allProducts };

const productService = { type: null, message: allProducts[0] };

const deleteService = { type: 204, message: '' };

module.exports = { allProductsService, productService, deleteService }