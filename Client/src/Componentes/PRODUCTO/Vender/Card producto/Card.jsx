import React from 'react';
import styles from './Card.module.css';

const Card = ({id, nombre, img, precio}) => {
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
                <button className={styles.btn}>-</button>
                <h3>Cantidad</h3>
                <button className={styles.btn}>+</button>
            </div>
            <div className={styles.ContenedorBotones}>
                <button className={styles.btnAgregar}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Card;