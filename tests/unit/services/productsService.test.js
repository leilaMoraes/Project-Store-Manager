const { expect } = require("chai");
const sinon = require("sinon");
const { productsModels } = require("../../../src/models");
const { productsService } = require("../../../src/services");
const { allProducts } = require("../models/mock");
const { allProductsService, productService, deleteService, notFound } = require("./mock");

describe('Testa a camada service para a rota /products', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Retorna todos os produtos cadastrados (service)', async function () {
    sinon.stub(productsModels, 'getAllProducts').resolves(allProducts);
    const result = await productsService.getAllProducts();
    expect(result).to.be.deep.equal(allProductsService);
  });

  it('Retorna um produto pelo id (service)', async function () {
    sinon.stub(productsModels, "getProductById").resolves(allProducts[0]);
    const result = await productsService.getProductById(1);
    expect(result).to.be.deep.equal(productService);
  });

  it("Retorna id not found (service)", async function () {
    sinon.stub(productsModels, 'getProductById').resolves(undefined);

    const result = await productsService.getProductById(0);
    expect(result).to.be.deep.equal(notFound);
  });

  it('Deleta um produto pelo id (service)', async function () {
    sinon.stub(productsModels, 'getProductById').resolves(allProducts[0]);
    sinon.stub(productsModels, 'deleteProduct').resolves(undefined);

    const result = await productsService.deleteProduct(1);
    expect(result).to.be.deep.equal(deleteService);
  });
});
