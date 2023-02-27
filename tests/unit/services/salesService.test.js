const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');
const { salesService } = require('../../../src/services');
const { allSales, saleById } = require('../models/mock');
const { allSalesService, saleService, notFoundSale } = require("./mock");

describe('Testa a camada service para a rota /sales', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('1) Retorna todas as vendas (service)', async function () {
    sinon.stub(salesModel, 'getAllSales').resolves(allSales);
    const result = await salesService.getAllSales();
    expect(result).to.be.deep.equal(allSalesService);
  });

  it('2) Retorna vendas com mesmo id (service)', async function () {
    sinon.stub(salesModel, 'getSaleById').resolves(saleById);
    const result = await salesService.getSaleById(1);
    expect(result).to.be.deep.equal(saleService);
  });

  it('3) Retorna erro ao tentar retornar vendas com mesmo id (service)', async function () {
    sinon.stub(salesModel, 'getSaleById').resolves(allSales[2]);
    const result = await salesService.getSaleById(0);
    expect(result).to.be.deep.equal(notFoundSale);
  })
});