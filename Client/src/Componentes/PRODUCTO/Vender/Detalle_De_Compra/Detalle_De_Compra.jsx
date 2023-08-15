import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Detalle_De_Compra.module.css';
import { quitarDelCarrito } from '../../../../Redux/carritoDeComprasSlice'
import axios from 'axios';

const DetalleDeCompra = () => {
    const carrito = useSelector(state => state.carrito);
    const dispatch = useDispatch();
    const [qrGenerado, setQrGenerado] = useState(false);

    // Calcular el precio total del carrito
    const precioTotalCarrito = carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);

    const handleEliminarProducto = (idProducto) => {
        dispatch(quitarDelCarrito(idProducto));
    };
    const handleVolverAtras = () => {
        window.history.back();
    };

    const handleGenerarQR = async () => {
        let InfoCarrito = carrito.map(item => {
            if (item) {
                return {
                    id: item.producto.id,
                    nombre: item.producto.nombre,
                    cantidad: item.cantidad,
                    precio: item.producto.precio
                }
            } else {
                return "Carrito vacío";
            }
        })
        if (InfoCarrito.length > 0) {
            try {
                await axios.post("http://localhost:3001/pagos/nueva_orden", { InfoCarrito });
                console.log("Items Enviados: ", InfoCarrito);
            } catch (error) {
                console.log("Error al enviar los datos a Mercado Pago (componente Detalle) " + error.message);
            }
        } else {
            console.log("No hay productos en InfoCarrito");
        }

        InfoCarrito.length > 0 ? setQrGenerado(true) : setQrGenerado(false);
    }

    const handlerEliminarQR = async () => {
        setQrGenerado(false);
        await axios.delete("http://localhost:3001/pagos/eliminar_orden");
    }


    return (
        <div className={styles.ContenedorGeneral}>
            <div className={styles.ContenedorTitulo}>
                <h2>Detalle de Compra</h2>
            </div>
            <div className={styles.ContenedorProductosYTotal}>
                <div className={styles.ContenedorProductos}>
                    <h2>Productos en el Carrito:</h2>
                    {carrito.map((item, index) => (
                        <div key={index} className={styles.ContenedorCard}>
                            <h3>Producto: {item.producto.nombre}</h3>
                            <h3>Precio por unidad: ${item.producto.precio}</h3>
                            <h3>Cantidad: {item.cantidad}</h3>
                            {/* <img className={styles.imagen} src={item.producto.img} alt={item.producto.nombre} /> */}
                            <h3>Precio total del producto: ${item.producto.precio * item.cantidad}</h3>
                            <button className={styles.botonEliminar} onClick={() => handleEliminarProducto(item.producto.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
                <div className={styles.ContenedorTotal}>
                    <h2 className={styles.Total}>Total de la compra: ${precioTotalCarrito}</h2>
                    <div className={styles.ContenedorQR}>
                        {qrGenerado && <img className={styles.imagenQR} src='https://www.mercadopago.com/instore/merchant/qr/84881780/0e64ee574a0a442f9619410ab3e11bbd33e88a1f14e94cd5941993d725caf3d1.png' />}
                    </div>
                </div>
            </div>
            <div styles={styles.ContenedorBotones}>
                <button disabled={precioTotalCarrito <= 0} onClick={handleGenerarQR}>Generar orden</button>
                <button disabled={!qrGenerado} onClick={handlerEliminarQR}>Eliminar orden</button>
                <button className={styles.botonAtras} onClick={handleVolverAtras}>Volver</button>
            </div>


        </div>
    );
}

export default DetalleDeCompra;