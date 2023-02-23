const chai = require("chai");
const { expect } = chai;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { productsService } = require("../../../src/services");
const { productsController } = require("../../../src/controllers");
const { allProductsService, productService, deleteService, notFound } = require("../services/mock");
const { allProducts } = require("../models/mock");

chai.use(sinonChai);

describe('Testa a camada controller para a rota /products', function () {
  afterEach(function () {
    sinon.restore();
  });

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

  it('Retorna product not found (controller)', async function () {
    const req = { params: { id: 0 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById').resolves(notFound);

    await productsController.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: "Product not found" });
  });

  it('Deleta um produto pelo id (controller)', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves(deleteService);

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith( { message: '' } );
  });

  it('Não deleta um produto pelo id (controller)', async function () {
    const req = { params: { id: 0 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves(notFound);

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
});
