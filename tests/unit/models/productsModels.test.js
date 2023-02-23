const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const { productsModels } = require("../../../src/models");
const { allProducts } = require("./mock");

describe('Testa a camada model para a rota /products', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('1) Retorna todos os produtos cadastrados (model)', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productsModels.getAllProducts();
    expect(result).to.be.deep.equal(allProducts);
  });

  it('2) Retorna um produto pelo id (model)', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts[0]]]);
    const result = await productsModels.getProductById(1);
    expect(result).to.be.deep.equal(allProducts[0]);
  });

  it('3) Deleta um produto pelo id (model)', async function () {
    sinon.stub(connection, "execute").resolves(undefined);
    const result = await productsModels.deleteProduct(1);
    expect(result).to.be.deep.equal(undefined);
  })
});
