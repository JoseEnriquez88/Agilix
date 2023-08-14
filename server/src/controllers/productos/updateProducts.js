const { Producto } = require("../../db");

const updateProducto = async (id,nombre,img,precio,stock,ventaId,cantidad)  => {
  try {
    if (id && nombre && img && precio) {
      const [numUpdated, updatedProductos] = await Producto.update(
        { nombre: nombre, img: img, precio: precio},
        {
          where: {
            id: id,
          },
          returning: true, // para obtener el registro actualizado
        }
      );
      

      if (numUpdated === 0) {
        throw new Error('El producto no pudo actualizarse.');
      }

      const productoActualizado = updatedProductos[0];
      if(stock){
        productoActualizado.stock = stock;
        await productoActualizado.save();
      }
      
      // Si se proporciona un ID de venta, establecer la relación
      if (ventaId) {
        const detalleVenta = await Detalle_Venta.create({
          cantidad: cantidad, 
          ProductoId: productoActualizado.id,
          VentaId: ventaId,
        });
      }

      return nombre;
    }
  } catch (error) {
    return { error: 'No se pudo actualizar el producto.' };
  }
};


module.exports =updateProducto;
