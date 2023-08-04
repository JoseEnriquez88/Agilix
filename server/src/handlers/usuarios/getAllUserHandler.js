const { getAllUsers } = require("../../controllers/usuarios/getAllUsers");
const { getUserById } = require("../../controllers/usuarios/getUserById");
const { getUserByName } = require("../../controllers/usuarios/getUserByName");
const { getUserByEmail } = require("../../controllers/usuarios/getUserByEmail");

const getAllUserHandler = async (req, res) => {
  const { nombre, email } = req.query;

  //Handler Buscar Usuario por Nombre

  if (nombre && !email) {
    try {
      const usuario = await getUserByName(nombre);
      return res.status(200).json(usuario);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  } else if (!nombre && email) {
    //Handler Buscar Usuario por Email

    try {
      const respuesta = await getUserByEmail(email);
      return res.status(200).json(respuesta);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  } else {
    //Handler Traer todos los Usuarios

    try {
      const usuarios = await getAllUsers();
      return res.status(200).json(usuarios);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

//Handler Buscar Usuario por ID

const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await getUserById(id);
    return res.status(200).send(usuario);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllUserHandler,
  getUserByIdHandler,
};
