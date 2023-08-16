const nombreRegex = /^[a-zA-Z0-9\s]+$/;
const precioRegex = /^[+-]?\d+(\.\d{1,2})?$/;
const imagenRegex = /^.+\.(jpeg|jpg|png)$/;
const imagenRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;
const stockRegex = /^[0-9]+$/;
const postProductValidation = (nombre, img, precio,stock) => {
  //validacion del nombre
  if (!nombreRegex.test(nombre))
    throw new Error(`El nombre ${nombre} no es válido para crear el producto.`);
  if (nombre === "" || nombre.length === 0)
    throw new Error(
      `Es necesario que el campo producto no este vacio para poder crearlo.`
    );
  if (nombre.length > 50)
    throw new Error(
      `El nombre del producto solo puede contener máximo 50 caracteres.`
    );

  //validacion de la imagen
  //   if (!imagenRegex.test(img) || !imagenRegexURL.test(img))
  //     throw new Error(
  //       "La imagen debe ser una URL válida o tener un formato jpg, jpeg, png"
  //     );
  if (img.length === "")
    throw new Error(`Es necesario una imagen del producto para poder crearlo.`);

  //validacion del precio
  //   if (isNaN(parseFloat(precio)))
  if (!precioRegex.test(precio))
    throw new Error(
      `El precio debe ser de tipo numérico o decimal para poder crear el producto.`
    );
  if (precio === "")
    throw new Error(
      `El campo precio del producto no puede estar vacio. Digite un valor poder crear el producto`
    );
     // Validación de la stock
     if (!stockRegex.test(stock) || parseInt(stock) <= 0)
     throw new Error(
       `La stock debe ser un número mayor a 0 para poder crear el producto.`
     );
 };


module.exports = postProductValidation;
