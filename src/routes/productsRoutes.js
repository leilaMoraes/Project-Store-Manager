const express = require('express');

const productsRouter = express.Router();

const productsController = require('../controllers/productsController');

productsRouter.get('/', productsController.getProducts);

module.exports = productsRouter;