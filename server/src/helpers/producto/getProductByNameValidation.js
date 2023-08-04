const nameRegex = /[A-Za-z]/;
const getProductByNameValidation = (name) => {
  if (!nameRegex.test(name))
    throw new Error(`El nombre ${name} no es válido para crear el producto.`);
};
module.exports = getProductByNameValidation;
