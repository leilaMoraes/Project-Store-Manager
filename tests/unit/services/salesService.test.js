const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales } = require('../models/mock');
const { allSalesService } = require("./mock");

describe('Testa a camada service para a rota /sales', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('1) Retorna todas as vendas (service)', async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(allSales);
    const result = await salesService.getAllSales();
    expect(result).to.be.deep.equal(allSalesService);
  });
});