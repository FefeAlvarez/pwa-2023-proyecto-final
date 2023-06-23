const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.render('index', { products });
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { getProducts };
