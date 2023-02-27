const allProducts =
[
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  }
];

const newProduct = {
  id: 4,
  name: 'ProdutoX'
}

const allSales =
[
  {
    "saleId": 1,
    "date": "2023-02-26T14:11:07.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2023-02-26T14:11:07.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-02-26T14:11:07.000Z",
    "productId": 3,
    "quantity": 15
  }
]

const saleById =
[
  {
    date: "2023-02-26T14:11:07.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2023-02-26T14:11:07.000Z",
    productId: 2,
    quantity: 10,
  },
]

module.exports = { allProducts, newProduct, allSales, saleById }