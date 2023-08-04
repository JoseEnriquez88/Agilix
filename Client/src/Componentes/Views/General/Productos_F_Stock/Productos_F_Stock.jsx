import React from 'react';
import Card from '../Card_Producto_F_Stock/Card_Producto_F_Stock';
import styles from './Productos_F_Stock.module.css';

const Productos = () => {
    return (
        <div className={styles.ContenedorProductos}>
            <div className={styles.ContenedorTitulo}>
                <h2>Productos fuera de stock</h2>
            </div>
            <div className={styles.ContenedorCards}>
                {/* HACER .MAP DE CARD_PRODUCTO */}
            </div>
        </div>
    )
}

export default Productos;