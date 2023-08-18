const nombreRegex = /^[a-zA-Z\s]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const postClienteValidation = (nombre, telefono, email, dni) => {
    if(nombre.length === '') throw new Error('El campo nombre es requerido para la creación del cliente.'); 
    if(!nombreRegex.test(nombre)) throw new Error(`El nombre ${nombre} no valido para la creación de cliente`);
    if(nombre.length > 50) throw new Error('El nombre no puede contener mas de 50 caracteres.');

    if(telefono.length === 0) throw new Error('El campo telefono es requerido para la creación del cliente');
    if(telefono.length > 14) throw new Error('El numero de telefono no es válido.');

    if(email.length === '') throw new Error('El campo email es requerido para la creación del cliente.')
    if(!regexEmail.test(email)) throw new Error('El email escrito no es válido para la creación del cliente.');

    if(dni.length === 0) throw new Error('El campo DNI es requerido para la creación del cliente.');
    if(dni.length > 8) throw new Error('El DNI escrito no es válido para la creación del cliente.');
};

module.exports = postClienteValidation;