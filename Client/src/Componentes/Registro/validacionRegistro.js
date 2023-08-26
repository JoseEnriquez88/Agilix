const nombreRegex = /^[a-zA-Z\s]+$/;
const telRegexGeneral = /^(?:\+?[0-9]{1,3}\s?)?(\(?[0-9]+\)?[-\s]?)*[0-9]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexContraseña = /^(?=.*[A-Z])(?=.*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z].*[a-zA-Z]).{6,}$/;
const roles = ['administrador', 'cajero'];


const validacionRegistro = (input) => {
    const errors = {};

    if (!nombreRegex.test(input.nombre)) errors.nombre = `El nombre ${input.nombre} no es válido para crear el usuario.`;
    if (input.nombre === "" || input.nombre.length === 0) errors.nombre = 'Es necesario que el usuario contenga un nombre para poder crearlo.';
    if (input.nombre.length > 50) errors.nombre = `El nombre del usuario solo puede contener 50 caracteres máximo.`;

    // Validación del apellido
    if (!nombreRegex.test(input.apellido)) errors.apellido = `El apellido ${input.apellido} no es válido para crear el usuario.`;
    if (input.apellido === "" || input.apellido.length === 0) errors.apellido = 'Es necesario que el usuario contenga apellido para poder crearlo.';
    if (input.apellido.length > 50) errors.apellido = `El apellido del usuario solo puede contener 50 caracteres máximo.`;

    // Validación del email
    if (input.email === "") errors.email = "Requiere de un email para crear un usuario.";
    if (!regexEmail.test(input.email)) errors.email = "Email no válido.";

    // Validación del teléfono
    if (input.telefono === "") errors.telefono = "Se requiere de un teléfono para crear el usuario.";
    if (!telRegexGeneral.test(input.telefono)) errors.telefono = "Teléfono no válido.";

    // Validación de contraseña
    // if (!regexContraseña.test(input.contraseña)) errors.contraseña = 'La contraseña no es válida para crear el usuario.';
    if (input.contraseña.length > 20) errors.contraseña = 'La contraseña no debe contener más de 20 caracteres.';
    if (input.contraseña === "" || input.contraseña.length === 0) errors.contraseña = 'Es necesario que el usuario contenga una contraseña para poder crearlo.';
    if (input.contraseña.length < 6) errors.contraseña = 'La contraseña debe contener al menos 6 caracteres';

    // Validación de DNI
    if (input.dni === '' || input.dni.length === 0) errors.dni = 'Es necesario que el usuario contenga un DNI para poder crearlo.';

    // Validación de roles
    if (!roles.includes(input.rol.toLowerCase())) errors.rol = `Rol no válido. Digite solo ${roles[0]} o ${roles[1]} como rol para la creación del usuario.`;

    return errors;
}

export default validacionRegistro;
