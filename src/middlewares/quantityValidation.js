module.exports = (req, res, next) => {
  const products = req.body;
  if (products.every(({ quantity }) => quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  if (products.some(({ quantity }) => quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  return next();
};