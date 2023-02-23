const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const { productsModels } = require("../../../src/models");
const { allProducts } = require("./mock");

describe("Testa a camada model para a rota /products", function () {
  it("Retorna todos os produtos cadastrados (model)", async function () {
    sinon.stub(connection, "execute").resolves([allProducts]);
    const result = await productsModels.getAllProducts();
    expect(result).to.be.deep.equal(allProducts);
  });
});
