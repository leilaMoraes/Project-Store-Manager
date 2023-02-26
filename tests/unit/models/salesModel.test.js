const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { allSales } = require('./mock');

describe('Testa a camada model para a rota /sales', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('1) Retorna todas as vendas (model)', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);
    const result = await salesModel.getAllSales();
    expect(result).to.be.deep.equal(allSales);
  });
});