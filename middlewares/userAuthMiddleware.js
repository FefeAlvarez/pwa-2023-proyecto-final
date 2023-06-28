const { userModel } = require('../models');
const { errorHandler } = require('../utils/errorHandler');
const { verifyToken } = require('../utils/jwtokenHandler');

const userAuthMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      errorHandler(res, 'no existe el token');
      return;
    }

    const token = req.headers['authorization'].split(' ').pop();
    const dataToken = await verifyToken(token);
    if (!dataToken._id) {
      errorHandler(res, 'El usuario no esta autenticado', 403);
      return;
    }
    const user = await userModel.findById(dataToken._id)
    user.set('password', undefined, { strict: false });

    req.user=user
    next();
  } catch (error) {
    errorHandler(res, 'No hay sesion', 401);
  }
};
module.exports = userAuthMiddleware;
