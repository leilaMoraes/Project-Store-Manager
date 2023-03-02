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

const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales s
    JOIN StoreManager.sales_products sp
    ON s.id = sp.sale_id
    WHERE s.id = ?
    ORDER BY productId`, [id],
  );
  return result;
};

const insertSales = async (date) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)', [date],
  );
  return insertId;
};

const insertSalesProducts = async (saleId, product) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, product.product_id, product.quantity],
  );
};

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
};

module.exports = { getAllSales, getSaleById, deleteSale, insertSales, insertSalesProducts };