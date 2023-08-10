const { Producto } = require('../../db');

const deleteProducto = async (id,estado) => {
    console.log(id)
    const producto = await Producto.findOne({ where: { id:id } });
    console.log(id,"este es el producto nro: ",producto)
    if(!producto) throw new Error(`El producto ${id} no existe`);
    console.log(estado)
    producto.estado= estado;
    await producto.save();
    console.log(id,"este es el producto nro: ",producto)


    if(!producto) throw new Error(`El producto con el id ${id} no pudo eliminarse.`);
    return `El producto ${producto.name} fue eliminado exitosamente.`;
};

module.exports = deleteProducto;