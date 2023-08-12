import React, { useState } from 'react';
import styles from './Card.module.css';
import { useDispatch } from 'react-redux';
import { agregarAlCarrito } from '../../../../Redux/carritoDeComprasSlice'; 


const Card = ({ id, nombre, img, precio }) => {
    const [cantidad, setCantidad] = useState(0);
    const dispatch = useDispatch();
  
    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    const handleAgregarAlCarrito = () => {
        dispatch(agregarAlCarrito({ producto: { id, nombre, img, precio }, cantidad }));
        setCantidad(0);

        
    };

    return (
        <div className={styles.ContenedorCard}>
            <div className={styles.ContenedorImg}>
                <img src={img} alt={nombre} />
            </div>
            <div className={styles.ContenedorInfo}>
                <h3>{nombre}</h3>
                <p>Precio: ${precio}</p>
            </div>
            <div className={styles.ContenedorBotones}>
                <button className={styles.btn} onClick={disminuirCantidad}>-</button>
                <h3>Cantidad: {cantidad}</h3>
                <button className={styles.btn} onClick={aumentarCantidad}>+</button>
            </div>
            <div className={styles.ContenedorBotones}>
                <button className={styles.btnAgregar} onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default Card;