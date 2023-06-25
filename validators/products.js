const { check } = require('express-validator');
const validateResults = require('../utils/validationHandler');

const createProductValidation = [
  check('title').exists().notEmpty(),
  check('price').exists().notEmpty(),
  check('description').exists().notEmpty(),
  check('image').exists().notEmpty(),
  check('category').exists().notEmpty(),
  check('imageId').exists().notEmpty().isMongoId(),

  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

module.exports = { createProductValidation };
