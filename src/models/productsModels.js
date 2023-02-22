const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return result;
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [id],
  );
};

module.exports = { getAllProducts, getProductById, deleteProduct };