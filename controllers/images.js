const { imageModel } = require('../models');
const { errorHandler } = require('../utils/errorHandler');

const getImages = async (req, res) => {
  try {
    const data = await imageModel.find({});
    res.send({ data });
  } catch (error) {
    console.log('error', error);
    errorHandler(res, 'ERROR AL OBTENER IMAGENES');
  }
};



const uploadImage = async (req, res) => {
  try {
    const { file } = req;
    const fileData = {
      filename: file.filename,
      url: `${process.env.PUBLIC_URL}/${file.filename}`
    };
    const data = await imageModel.create(fileData);
    res.send({ data });
  } catch (error) {
    errorHandler(res, 'ERROR AL SUBIR IMAGEN');
  }
};
module.exports = { getImages, uploadImage };
