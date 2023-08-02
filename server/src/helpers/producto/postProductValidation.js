
const nombreRegex = /^[a-zA-Z0-9\s]+$/;
const imagenRegex = /^.+\.(jpeg|jpg|png)$/;
const imagenRegexURL = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

const postProductValidation = (nombre, img, precio) => {

    //validacion del nombre
    if(!nombreRegex.test(nombre)) throw new Error(`El nombre ${nombre} no es válido para crear el producto.`);
    if(nombre === '' || nombre.length === 0) throw new Error(`Es necesario que el prodcuto contenga nombre para crear el producto.`);
    if(nombre.length > 50) throw new Error(`El nombre del producto solo puede contener 50 caracteres máximo.`);

    //validacion de la imagen
    if(!imagenRegex.test(img) || !imagenRegexURL.test(img)) throw new Error('La imagen debe ser una URL válida o tener un formato jpg, jpeg, png');
    if(img.length === '') throw new Error(`Es necesario una imagen del producto para poder crearlo.`);

    //validacion del precio
    // if(isNaN(parseFloat(precio))) throw new Error(`${precio} debe ser de tipo numérico o decimal para poder crearse el producto.`);
    if(precio === '') throw new Error(`El campo precio del producto no puede estar vacio. Digite un valor poder crear el producto`);
}

module.exports = postProductValidation;