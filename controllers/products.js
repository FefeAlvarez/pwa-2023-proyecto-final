const { productModel } = require('../models');
const { errorHandler } = require('../utils/errorHandler');

const getAllProducts = async (req, res) => {
  try {
    const data = await productModel.find({});
    res.send(data);
  } catch (error) {
    errorHandler(res, 'ERROR AL OBTENER EL LISTADO DE PRODUCTOS');
  }
};

const getProductById = async (req, res) => {
  try {
    const { params } = req;
    const _id = params.id;
    const data = await productModel.findOne({ _id });
    res.send({ data });
  } catch (error) {
    errorHandler(res, 'ERROR AL OBTENER DETALLE DEL PRODUCTO');
  }
};

const createProduct = async (req, res) => {
  const { body } = req;
  const data = await productModel.create(body);
  res.send({ data });
};

const modifyProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const updatedProduct = await productModel.findByIdAndUpdate(id, body, {
      new: true
    });

    if (!updatedProduct) {
      errorHandler(res, 'PRODUCTO NO ENCONTRADO', 404);
      return;
    }

    res.json({ data: updatedProduct });
  } catch (error) {
    console.error('ERROR: ', error);
    errorHandler(res, 'ERROR AL MODIFICAR EL PRODUCTO');
  }
};

const deleteProduct = async (req, res) => {
  try {
    let { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete({ _id: id });
    res.json({
      message: 'El producto se ha eliminado correctamente',
      data: deletedProduct
    });
  } catch (error) {
    errorHandler(res, 'Error al eliminar el producto');
  }
};
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  modifyProduct,
  deleteProduct
};
