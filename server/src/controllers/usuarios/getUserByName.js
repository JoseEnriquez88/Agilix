const getAllUsers = require('./getAllUsers');

const getUserByName = async (nombre) => {
    const usuariosEncontrados = await getAllUsers();
    if(nombre){
        const usuariosFiltrados = usuariosEncontrados.filter((user) => user.nombre.toLowerCase().includes(nombre.toLowerCase()));
        if(usuariosFiltrados.length) return usuariosFiltrados;
        throw new Error(`No se encontró el usuario con el nombre: ${nombre}`);
        
    }else return usuariosEncontrados;
};

module.exports = getUserByName;

