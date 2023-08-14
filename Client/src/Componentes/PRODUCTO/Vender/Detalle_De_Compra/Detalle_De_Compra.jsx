import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Detalle_De_Compra.module.css';
import { quitarDelCarrito } from '../../../../Redux/carritoDeComprasSlice'

const DetalleDeCompra = () => {
    const carrito = useSelector(state => state.carrito);
    const dispatch = useDispatch();

    // Calcular el precio total del carrito
    const precioTotalCarrito = carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);

    const handleEliminarProducto = (idProducto) => {
        dispatch(quitarDelCarrito(idProducto));
    };
    const handleVolverAtras = () => {
        window.history.back();
    };

    return (
        <div className={styles.contenedor}>
            <h2>Detalle de Compra</h2>
            <div>
                <h3>Productos en el Carrito:</h3>
                {carrito.map((item, index) => (
                    <div key={index} className={styles.itemContainer}>
                        <p>Producto: {item.producto.nombre}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <img className={styles.imagen} src={item.producto.img} alt={item.producto.nombre} />
                        <p>Precio Total: ${item.producto.precio * item.cantidad}</p>
                        <button className={styles.botonEliminar} onClick={() => handleEliminarProducto(item.producto.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div>
                <h3>Precio Total del Carrito: ${precioTotalCarrito}</h3>
            </div>
            <button   className={styles.botonAtras} onClick={handleVolverAtras}>Volver</button>
        </div>
    );
}

export default DetalleDeCompra;