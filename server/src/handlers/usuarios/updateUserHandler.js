const updateUser = require('../../controllers/usuarios/updateUser');
const deleteUser = require('../../controllers/usuarios/deleteUser');
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const storage = multer.memoryStorage();
const upload = multer({ storage });


const updateUserHandler = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, apellido, email, telefono, dni, estado, rol, contraseña } = req.body;
  let imagenURL = "";
  if(req.files.length){
    const imagenDataUri = `data:${req.files[0].mimetype};base64,${req.files[0].buffer.toString("base64")}`;
    const imagen = await cloudinary.uploader.upload(imagenDataUri, {folder: "Agilix",});
    imagenURL = imagen.secure_url;
  }

  try {
    console.log("updateUserHandler", "ROL:", rol)
    const respuesta = (typeof estado !== "boolean") ? await updateUser(id, nombre, apellido, email, telefono, dni, contraseña, rol, imagenURL!=="" && imagenURL) : await deleteUser(id, estado); // Llamada a la función updateUser con el parámetro estado
    res.status(200).json({ message: `Actualización exitosa del cliente ${respuesta}` });
  } catch (err) {
    console.error('Error:', err);

    let statusCode = 500;
    let message = 'Error interno del servidor.';

    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = err.message;
    } else if (err.name === 'SequelizeUniqueConstraintError') {
      statusCode = 409;
      message = 'El registro ya existe en la base de datos.';
    }

    res.status(statusCode).json({ message });
  }
};

module.exports = updateUserHandler;
