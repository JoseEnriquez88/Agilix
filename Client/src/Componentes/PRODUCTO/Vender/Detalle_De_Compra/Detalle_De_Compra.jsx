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
            <div>
                <div>
                    <h3>Productos en el Carrito:</h3>
                    {carrito.map((item, index) => (
                        <div key={index} className={styles.ContenedorCard}>
                            <p>Producto: {item.producto.nombre}</p>
                            <p>Precio por unidad: ${item.producto.precio}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <img className={styles.imagen} src={item.producto.img} alt={item.producto.nombre} />
                            <p>Precio total del producto: ${item.producto.precio * item.cantidad}</p>
                            <button className={styles.botonEliminar} onClick={() => handleEliminarProducto(item.producto.id)}>Eliminar</button>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Total de la compra: ${precioTotalCarrito}</h2>
                </div>
            </div>
            <div>
                <button disabled={precioTotalCarrito <= 0} onClick={handleGenerarQR}>Generar orden</button>
                <button disabled={!qrGenerado} onClick={handlerEliminarQR}>Eliminar orden</button>
                <button className={styles.botonAtras} onClick={handleVolverAtras}>Volver</button>
                <div className={styles.contenedorQR}>
                    {qrGenerado && <img className={styles.imagenQR} src='https://www.mercadopago.com/instore/merchant/qr/84881780/template_0e64ee574a0a442f9619410ab3e11bbd33e88a1f14e94cd5941993d725caf3d1.png' />}
                </div>
            </div>


        </div>
    );
}

export default DetalleDeCompra;