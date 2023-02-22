const express = require('express');

const productsRouter = express.Router();

const { productsController } = require('../controllers');

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/:id', productsController.getProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;