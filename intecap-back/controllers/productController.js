const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const product = await Product.create({ name, description, price, stock });
    res.status(201).json(product);
  } catch {
    res.status(400).json({ message: 'Error al crear producto' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description, price, stock } = req.body;
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    await product.update({ name, description, price, stock });
    res.json(product);
  } catch {
    res.status(400).json({ message: 'Error al actualizar producto' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByPk(id);

    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

    await product.destroy();
    res.json({ message: 'Producto eliminado' });
  } catch {
    res.status(400).json({ message: 'Error al eliminar producto' });
  }
};
