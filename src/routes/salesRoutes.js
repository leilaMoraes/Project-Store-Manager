const express = require('express');

const salesRouter = express.Router();

const { salesController } = require('../controllers');

salesRouter.get('/', salesController.getSales);

salesRouter.get('/:id', salesController.getSale);

module.exports = salesRouter;