import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styles from './Reporte.module.css';

const Reporte = () => {
    const pagos = [
        {
            id: 1,
            producto: "Leche",
            precio: 2.5,
        },
        {
            id: 2,
            producto: "Pan",
            precio: 1.0,
        },
        {
            id: 3,
            producto: "Huevos",
            precio: 3.2,
        },
        {
            id: 4,
            producto: "Arroz",
            precio: 2.0,
        },
        {
            id: 5,
            producto: "Carne",
            precio: 8.5,
        },
        {
            id: 6,
            producto: "Manzanas",
            precio: 4.0,
        },
        {
            id: 7,
            producto: "Papas",
            precio: 1.5,
        },
        {
            id: 8,
            producto: "Queso",
            precio: 3.8,
        },
        {
            id: 9,
            producto: "Tomates",
            precio: 2.2,
        },
        {
            id: 10,
            producto: "Pollo",
            precio: 7.0,
        },
        {
            id: 11,
            producto: "Pescado",
            precio: 9.5,
        },
        {
            id: 12,
            producto: "Cebolla",
            precio: 1.2,
        },
        {
            id: 13,
            producto: "Pasta",
            precio: 2.3,
        },
        {
            id: 14,
            producto: "Aceite",
            precio: 3.5,
        },
        {
            id: 15,
            producto: "Azúcar",
            precio: 1.8,
        },
        {
            id: 16,
            producto: "Sal",
            precio: 0.5,
        },
        {
            id: 17,
            producto: "Café",
            precio: 4.7,
        },
        {
            id: 18,
            producto: "Mantequilla",
            precio: 2.8,
        },
        {
            id: 19,
            producto: "Yogur",
            precio: 1.9,
        },
        {
            id: 20,
            producto: "Galletas",
            precio: 2.0,
        },
    ];

    return (
        <div className={styles.ContenedorCardsPagos}>
            <div className={styles.ContenedorBotonBack}>
                <NavLink to='/' className={styles.BotonBack}>
                    <ArrowBackIosNewIcon className={styles.IconoBack}/>
                </NavLink>
            </div>
            <div className={styles.TituloReporte}>
                <h1>Reporte de ventas</h1>
            </div>
            <div className={styles.Columnas}>
                <div className={styles.ColumnaProducto}><h2>Producto</h2></div>
                <div className={styles.ColumnaPrecio}><h2>Precio</h2></div>
            </div>

            <div className={styles.ContenedorPagos}>
                {pagos.map((pago) => {
                    return (
                        <div key={pago.id} className={styles.CardPago}>
                            <div className={styles.ContenedorProducto}>
                                <h2>{pago.producto}</h2>
                            </div>
                            <div className={styles.ContenedorPrecio}>
                                <p>${pago.precio}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Reporte;