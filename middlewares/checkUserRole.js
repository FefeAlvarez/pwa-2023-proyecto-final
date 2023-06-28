// Middleware para verificar el rol de usuario

const { errorHandler } = require('../utils/errorHandler');

const checkUserRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesDeUsuario = user.role;
    const tienePermisos = roles.some((aRole) => rolesDeUsuario.includes(aRole));
    if (!tienePermisos) {
      errorHandler(res, 'el usuario no tiene permisos', 403);
      return;
    }
    next();
  } catch (error) {
    errorHandler(res, 'Error con los permisos');
  }
};

module.exports = checkUserRole;
