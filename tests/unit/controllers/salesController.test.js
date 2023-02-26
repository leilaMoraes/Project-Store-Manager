const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { salesService } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');
const { allSalesService } = require('../services/mock');
const { allSales } = require('../models/mock');

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
});