const { expect } = require("chai");
const sinon = require("sinon");
const { productsModels } = require("../../../src/models");
const { productsService } = require("../../../src/services");
const { allProducts } = require("../models/mock");
const { allProductsService, productService } = require("./mock");

describe('Testa a camada service para a rota /products', function () {
  it('Retorna todos os produtos cadastrados (service)', async function () {
    sinon.stub(productsModels, 'getAllProducts').resolves(allProducts);
    const result = await productsService.getAllProducts();
    expect(result).to.be.deep.equal(allProductsService);
  });

  it('Retorna um produto pelo id (service)', async function () {
    sinon.stub(productsModels, 'getProductById').resolves(allProducts[0]);
    const result = await productsService.getProductById(1);
    expect(result).to.be.deep.equal(productService);
  });

  afterEach(function () {
    sinon.restore();
  });
});
