import React from 'react';
import { NavLink } from 'react-router-dom';
import grafico from '../../../../assets/Captura de pantalla 2023-08-03 230812.png'
import styles from './Comparacion_de_ventas.module.css';

const Comparacion_de_ventas = () => {
    return (
        <div className={styles.ContenedorComparacion}>
            <div className={styles.ContenedorGraficoYTitulo}>
                <div className={styles.ContenedorTitulo}>
                    <h2>Gráfico de ventas del mes</h2>
                </div>
                <div className={styles.ContenedorGrafico}>
                    <img src={grafico} alt='Gráfico de ventas por mes' className={styles.GraficoIMG} />
                </div>
            </div>

            <div className={styles.ContenedorBoton}>
                <NavLink to='/reporte' className={styles.BotonReporte}>Ver reporte</NavLink>
            </div>
        </div>
    );
}

export default Comparacion_de_ventas;