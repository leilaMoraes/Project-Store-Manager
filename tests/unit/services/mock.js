const { allProducts } = require("../models/mock");

const allProductsService = { type: null, message: allProducts };

const productService = { type: null, message: allProducts[0] };

module.exports = { allProductsService, productService }