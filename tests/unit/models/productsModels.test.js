const chai = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const { productsModels } = require("../../../src/models/index");
const { allProducts } = require("./mock");

const { expect } = chai;

describe("Testa a camada model para a rota /products", () => {
  it("Retorna todos os produtos cadastrados", async () => {
    sinon.stub(connection, "execute").resolves([allProducts]);
    const result = await productsModels.getAllProducts();
    expect(result).to.be.deep.equal(allProducts);
  });
});
