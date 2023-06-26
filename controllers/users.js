const { userModel } = require('../models');
const { errorHandler } = require('../utils/errorHandler');

const registerUser = async (req, res) => {
  try {
    const { body } = req;
    const data = await userModel.create(body);

    data.set('password', undefined, { strict: false });

    res.status(201);
    res.redirect('/api/products');
  } catch (e) {
    errorHandler(res, 'ERROR REGISTRANDO USUARIO NUEVO');
  }
};
const loginUser = async (req, res) => {
  const { body } = req;
  const user = await userModel.findOne({ email: body.email });

  if (!user) {
    errorHandler(res, 'USER_NOT_EXISTS', 404);
    return;
  }
  user.set('password', undefined, { strict: false });
  res.redirect('/api/products');
};

const renderLogin = (req, res) => {
  res.render('login');
};

const renderHome = (req, res) => {
  res.render('home');
};

const renderRegister = (req, res) => {
  res.render('register');
};
module.exports = {
  registerUser,
  loginUser,
  renderLogin,
  renderHome,
  renderRegister
};
