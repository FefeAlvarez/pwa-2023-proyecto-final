const { check } = require('express-validator');
const validateResults = require('../utils/validationHandler');

const registerUserValidation = [
    check("name")
    .exists()
    .notEmpty()
    .isLength({min:3, max:99}),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:6, max:20}),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];
const loginUserValidation = [
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("password")
    .exists()
    .notEmpty()
    .isLength({min:6, max:20}),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];
  module.exports={registerUserValidation, loginUserValidation}