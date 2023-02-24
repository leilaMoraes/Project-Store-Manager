const express = require('express');

const productsRouter = express.Router();

const { productsController } = require('../controllers');
const checkProduct = require('../middlewares/checkProduct');
const nameValidation = require('../middlewares/nameValidation');

productsRouter.get('/', productsController.getProducts);

productsRouter.get('/:id', productsController.getProduct);

productsRouter.post('/', nameValidation, productsController.insertProduct);

productsRouter.put('/:id', nameValidation, checkProduct, productsController.updateProduct);

productsRouter.delete('/:id', productsController.deleteProduct);

module.exports = productsRouter;