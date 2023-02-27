const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { allSalesService, saleService, notFoundSale } = require('../services/mock');
const { allSales, saleById } = require('../models/mock');

chai.use(sinonChai);

describe('Testa a camada controller para a rota /sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('1) Retorna todas as vendas (controller)', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getAllSales').resolves(allSalesService);

    await salesController.getSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales);
  });


  it('2) Retorna vendas com mesmo id (controller)', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getSaleById').resolves(saleService);

    await salesController.getSale(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleById);
  });

  it('3) Retorna erro ao tentar retornar vendas com mesmo id (controller)', async function () {
    const req = { params: { id: 0 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesService, 'getSaleById').resolves(notFoundSale);

    await salesController.getSale(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  });
});