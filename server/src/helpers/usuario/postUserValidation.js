const nombreRegex = /^[a-zA-Z\s]+$/;
const telRegexArgentina = /^\(?\d{2}\)?[\s\.-]?\d{4}[\s\.-]?\d{4}$/;
const telRegexGeneral = /^(?:\+?[0-9]{1,3}\s?)?(\(?[0-9]+\)?[-\s]?)*[0-9]+$/;
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const postUserValidation = (nombre, telefono, email,rol) => {
  //valido el nombre
  if (!nombreRegex.test(nombre))
    throw new Error(`El nombre ${nombre} no es válido para crear el usuario.`);
  if (nombre === "" || nombre.length === 0)
    throw new Error(
      `Es necesario que el campo usuario contenga un nombre para poder crearlo.`
    );
  if (nombre.length > 50)
    throw new Error(
      `El nombre del producto solo puede contener 50 caracteres máximo.`
    );

  //valido el telefono
  if (telefono === 0)
    throw new Error("Se requiere de un teléfono para crear el usuario.");
  if (!telRegexGeneral.test(telefono)) throw new Error("Teléfono no válido.");

  //valido el email
  if (email.length === "")throw new Error("Requiere de un email para crear un usuario.");
  if (!regexEmail.test(email)) throw new Error("Email no válido.");
  if (!rol=="administrador" || !rol=="cajero") throw new Error("Rol no valido, Revisar el rol.");
};

module.exports = postUserValidation;
