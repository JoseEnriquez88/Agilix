// VentasComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVentas } from '../../../Redux/ventasSlice';
import styles from "./pagos.module.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const VentasComponent = () => {
    const dispatch = useDispatch();
    const ventas = useSelector((state) => state.ventas.allVentas);

    useEffect(() => {
        dispatch(fetchVentas());
    }, [dispatch]);

    const handleVolverAtras = () => {
        window.history.back();
    };

    return (
        <div className={styles.contenedorPrincipal}>
            <button className={styles.BotonBack} onClick={handleVolverAtras}>
                <ArrowBackIosNewIcon className={styles.IconoBack} />
            </button>
            <h1> Historial de Pagos </h1>
            <table className={styles.tablaVentas}>
                <caption>
                    Todas las ventas
                </caption>
                <thead>
                    <tr className={styles.lastTr}>
                        <th className={styles.th}>Pagos Recibidos</th>
                        <th>Vendedor</th>
                        <th>Id de venta</th>
                        <th className={styles.th} >N° Orden Mercado Pago</th>
                        <th className={styles.th}>Fecha</th>
                        <th>Productos comprados</th>
                        <th className={styles.th}>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta) =>
                    (
                        <tr key={venta.id} className={styles.tr}>
                            <td className={styles.tdNombreCliente}>{venta.Cliente.nombre} VISA-POS</td>
                            <td className={styles.tdNombreUsuario} >{venta.Usuario.nombre}</td>
                            <td>{venta.id}</td>
                            <td className={styles.td}>{venta.id_mercado_pago}</td>
                            <td className={styles.td}>
                                {new Date(venta.fecha).toLocaleString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    second: "2-digit",
                                })}
                            </td >
                            <td>{venta.Productos.map((product, index) => {
                                return (
                                    <span key={product.id}>
                                        {product.nombre}
                                        {`(${product.Detalle_Venta.cantidad})`}
                                        {index !== venta.Productos.length - 1 ? ', ' : ''}
                                    </span>
                                )
                            })}</td>
                            <td className={styles.td}>${venta.total_venta}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default VentasComponent;