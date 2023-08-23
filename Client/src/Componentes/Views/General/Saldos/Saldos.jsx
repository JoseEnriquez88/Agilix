import React from 'react';
import styles from './Saldos.module.css';

const Saldos = () => {
    return (
        <div className={styles.ContenedorSaldos}>
            <div className={styles.ContenedorSaldoD}>
                <h3>Saldo disponible</h3>
                <p>150.000 $</p>
            </div>
            <div className={styles.ContenedorSaldoP}>
                <h3>Saldo pendiente</h3>
                <p>0 $</p>
            </div>
        </div>
    );
}

export default Saldos;