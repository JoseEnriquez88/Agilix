const nombreRegex = /^[a-zA-Z\s]+$/;
const telRegexGeneral = /^(?:\+?[0-9]{1,3}\s?)?(\(?[0-9]+\)?[-\s]?)*[0-9]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexContraseña = /^(?=.*[A-Z])(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z]).{6,}$/;
const roles = ['administrador', 'cajero'];

const postRegisterUserValidation = (nombre, apellido, telefono, email, contraseña, dni, rol) => {

    //valido nombre
    if(!nombreRegex.test(nombre)) throw new Error(`El nombre ${nombre} no es válido para crear el usuario.`);
    if(nombre === "" || nombre.length === 0) throw new Error('Es necesario que el usuario contenga un nombre para poder crearlo.');
    if(nombre.length > 50) throw new Error(`El nombre del usuario solo puede contener 50 caracteres máximo.`);

    //valido apellido
    if(!nombreRegex.test(apellido)) throw new Error(`El apellido ${apellido} no es válido para crear el usuario.`);
    if(apellido === "" || apellido.length === 0) throw new Error('Es necesario que el usuario contenga apellido para poder crearlo.');
    if(apellido.length > 50) throw new Error(`El apellido del usuario solo puede contener 50 caracteres máximo.`);

    //valido el email
    if(email.length === "")throw new Error("Requiere de un email para crear un usuario.");
    if(!regexEmail.test(email)) throw new Error("Email no válido.");

    //validacion del telefono
    if(telefono === 0) throw new Error("Se requiere de un teléfono para crear el usuario.");
    if(!telRegexGeneral.test(telefono)) throw new Error("Teléfono no válido.");

    //valido contraseña
    // if(!regexContraseña.test(contraseña)) throw new Error('La contraseña no es válida para crear el usuario.');
    if(contraseña.length > 20) throw new Error('La contraseña no debe contener mas de 20 digitos.') 
    if(contraseña === "" || contraseña.length === 0) throw new Error('Es necesario que el usuario contenga una contraseña para poder crearlo.');
    if(contraseña.length < 6) throw new Error('La contraseña debe contener al menos 6(seis) caracteres o mas');

    //valido dni
    if(dni.length === '' || dni.length === 0) throw new Error('Es necesario que el usuario contenga un DNI para poder crearlo.');

    //valido roles
    if(!roles.includes(rol.toLowerCase())) throw new Error(`Rol no válido. Digite solo ${roles[0]} o ${roles[1]} como rol para la creación del usuario.`);


}

module.exports = postRegisterUserValidation;