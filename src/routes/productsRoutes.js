const express = require('express');

const productsRouter = express.Router();

const { productsController } = require('../controllers');
const nameValidation = require('../middlewares/nameValidation');

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/:id', productsController.getProduct);

productsRouter.post('/', nameValidation, productsController.insertProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;