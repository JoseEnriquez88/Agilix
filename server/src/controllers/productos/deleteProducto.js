const { Producto } = require('../../db');

const deleteProducto = async (id,estado) => {
    
    const producto = await Producto.findOne({ where: { id:id } });
    console.log(id,"este es el producto nro: ",producto)
    if(!producto) throw new Error(`El producto ${id} no existe`);
    producto.estado= estado;
    await producto.save();
    

    if(!producto) throw new Error(`El producto con el id ${id} no pudo eliminarse.`);
    return `El producto ${producto.name} fue eliminado exitosamente.`;
};

module.exports = deleteProducto;
