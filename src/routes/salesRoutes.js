const express = require('express');

const salesRouter = express.Router();

const { salesController } = require('../controllers');
const productIdValidation = require('../middlewares/productIdValidation');
const quantityValidation = require('../middlewares/quantityValidation');

salesRouter.get('/', salesController.getSales);

salesRouter.get('/:id', salesController.getSale);

salesRouter.post('/', quantityValidation, productIdValidation, salesController.insertSale);

salesRouter.delete('/:id', salesController.deleteSale);

module.exports = salesRouter;