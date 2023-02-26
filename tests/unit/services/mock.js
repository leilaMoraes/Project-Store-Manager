const { allProducts, newProduct, allSales } = require("../models/mock");

const allProductsService = { type: 200, message: allProducts };

const productService = { type: null, message: allProducts[0] };

const notFound = { type: 404, message: "Product not found" };

const deleteService = { type: 204, message: '' };

const created = { type: 201, message: newProduct }

const allSalesService = { type: 200, message: allSales }

module.exports = { allProductsService, productService, deleteService, notFound, created, allSalesService }