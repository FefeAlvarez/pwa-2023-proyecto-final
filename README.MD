# Proyecto Backend

Este proyecto es el backend de la aplicación del Trabajo Integrador para el programa de backend de programacion web avanzada de la UTN, desarrollada con Node.js y MongoDB Atlas como base de datos en la nube. Utiliza el framework Express.js para crear la API RESTful y la biblioteca Mongoose para la interacción con la base de datos.

## Requisitos

- Node.js
- MongoDB Atlas

## Instalación

1. Clona este repositorio: `git clone https://github.com/FefeAlvarez/pwa-2023-proyecto-final-backend`
2. Navega hasta la carpeta del proyecto: `cd pwa-2023-proyecto-final-backend`
3. Instala las dependencias: `npm install`
4. Crea un archivo `.env` en el directorio raíz copiando las variables de entorno en el archivo `.env.example`

## Instalación del FRONT:

1. 

## Configuración

Antes de ejecutar la aplicación, asegúrate de configurar correctamente las variables de entorno en un archivo `.env`. Puedes crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables:
PORT=8080
PUBLIC_URL=http://localhost:8080
DB_URI= mongodb+srv://fefealvarez:RSFi5Cnq3AebAq96@cluster0.dh2ee9x.mongodb.net/catalogo-api?retryWrites=true&w=majority

## Ejecución

Ejecuta la aplicación: `npm run start`

El servidor estará disponible en `http://localhost:8080`.

## Endpoints

- `/api/users/register` -POST Registro de usuario nuevo
- `/api/users/login` - POST Login de un usuario existente
- `/api/users/logout` - POST Cierre de sesión de un usuario
- `/api/products` - GET Obtener listado completo de productos
- `/api/products/:id` - GET Obtener detalle de un producto
- `/api/products` - POST Crear un producto
- `/api/products/:id` - PUT Modificar un producto
- `/api/products/:id` - DELETE Eliminar un producto


