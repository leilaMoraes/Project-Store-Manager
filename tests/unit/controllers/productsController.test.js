const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { productsService } = require("../../../src/services");
const { productsController } = require("../../../src/controllers");
const { allProductsService, productService } = require("../services/mock");
const { allProducts } = require("../models/mock");

chai.use(sinonChai);

describe('Testa a camada controller para a rota /products', function () {
  it('Retorna todos os produtos cadastrados (controller)', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAllProducts').resolves(allProductsService);

    await productsController.getProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it('Retorna um produto pelo id (controller)', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').resolves(productService);

    await productsController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts[0]);
  });

  afterEach(function () {
    sinon.restore();
  });
});
