const { expect } = require("chai");
const sinon = require("sinon");
const { productsModels } = require("../../../src/models");
const { productsService } = require("../../../src/services");
const { allProducts } = require("../models/mock");
const { allProductsService } = require("./mock");

describe("Testa a camada service para a rota /products", function () {
  it('Retorna todos os produtos cadastrados (service)', async function () {
    sinon.stub(productsModels, 'getAllProducts').resolves(allProducts);
    const result = await productsService.getAllProducts();
    expect(result).to.be.deep.equal(allProductsService);
  });
});
