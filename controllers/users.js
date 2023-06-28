const { matchedData } = require('express-validator');
const { encriptarPass, compararHash } = require('../utils/passwordHandler');
const { signToken } = require('../utils/jwtokenHandler');
const { errorHandler } = require('../utils/errorHandler');
const { userModel } = require('../models');


const registerUser = async (req, res) => {
  try {
    req = matchedData(req);
    const password = await encriptarPass(req.password);
    const body = { ...req, password };
    const dataUser = await userModel.create(body);
    dataUser.set('password', undefined, { strict: false });

    const data = {
      token: await signToken(dataUser),
      user: dataUser
    };
    res.status(201);
    res.send({ data });
  } catch (e) {
    console.log(e);

    errorHandler(res, 'ERROR_REGISTER_USER');
  }
};


const loginUser = async (req, res) => {
  try {
    req = matchedData(req);
    const user = await userModel.findOne({ email: req.email });

    if (!user) {
      errorHandler(res, 'USER_NOT_EXISTS', 404);
      return;
    }

    const hashPassword = user.get('password');

    const check = await compararHash(req.password, hashPassword);

    if (!check) {
      errorHandler(res, 'PASSWORD_INVALID', 401);
      return;
    }

    user.set('password', undefined, { strict: false });
    const data = {
      token: await signToken(user),
      user
    };

    res.send({ data });
  } catch (e) {
    console.log(e);
    errorHandler(res, 'ERROR_LOGIN_USER');
  }
};
// const logoutUser = (req, res) => {
//   req.session.destroy((err) => {
//     if (err) {
//       errorHandler(res, 'Error al cerrar sesión', 500);
//       return;
//     }
//     res.json({ redirectUrl: 'http://localhost:3000/' });
//   });
// };
module.exports = { registerUser, 
  loginUser, 
  // logoutUser 
};
