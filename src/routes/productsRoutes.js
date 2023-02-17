const express = require('express');

const productsRouter = express.Router();

const { productsController } = require('../controllers');

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/:id', productsController.getProduct);

module.exports = productsRouter;