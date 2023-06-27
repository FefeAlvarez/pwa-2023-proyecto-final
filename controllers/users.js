const { userModel } = require('../models');
const { errorHandler } = require('../utils/errorHandler');

const registerUser = async (req, res) => {
  try {
    const { body } = req;
    const data = await userModel.create(body);
    data.set('password', undefined, { strict: false });

    res.status(201);
    res.json({ data });
  } catch (e) {
    errorHandler(res, 'ERROR REGISTRANDO USUARIO NUEVO');
  }
};
const loginUser = async (req, res) => {
  const { body } = req;
  const user = await userModel.findOne({
    email: body.email,
    password: body.password
  });

  if (!user) {
    errorHandler(res, 'El usuario y contraseña no coinciden', 404);
    return;
  }
  req.session.user = user;
  user.set('password', undefined, { strict: false });
  res.json({ user });
};

const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      errorHandler(res, 'Error al cerrar sesión', 500);
      return;
    }
    res.json({ redirectUrl: 'http://localhost:3000/' });
  });
};
module.exports = {
  registerUser,
  loginUser,
  logoutUser
};
