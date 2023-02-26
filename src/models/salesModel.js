const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales s
    JOIN StoreManager.sales_products sp
    ON s.id = sp.sale_id
    ORDER BY saleId, productId`,
  );
  return result;
};

module.exports = { getAllSales };
