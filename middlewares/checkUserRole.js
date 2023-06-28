// Middleware para verificar el rol de usuario
const checkUserRole = (req, res, next) => {
    const { role } = req.user; 
  console.log("rol, ",role);
    // Si el rol del usuario es "user", no se permite el delete, put o create
    if (role === 'user' && (req.method === 'DELETE' || req.method === 'PUT' || req.method === 'POST')) {
      return res.status(403).json({ error: 'Acceso denegado, no es ADMIN' });
    }
  
    
    next();
  };

  module.exports=checkUserRole