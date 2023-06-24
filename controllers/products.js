const { matchedData } = require('express-validator');
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
  const data = await productModel.create(body)
  res.send({data});
};

module.exports = { getAllProducts, getProductById, createProduct };
