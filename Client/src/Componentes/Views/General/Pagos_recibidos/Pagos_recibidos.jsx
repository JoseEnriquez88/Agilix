// VentasComponent.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVentas } from '../../../../Redux/ventasSlice';
import styles from "./pagos_recibidos.module.css";

const VentasComponent = () => {
    const dispatch = useDispatch();
    const ventas = useSelector((state) => state.ventas.allVentas);

    useEffect(() => {
        dispatch(fetchVentas());
    }, [dispatch]);

    return (
        <div className={styles.contenedorPrincipal}>
            <table className={styles.tablaVentas}>
                <thead>
                    <tr className={styles.lastTr}>
                        <th className={styles.th}>Pagos Recibidos</th>
                        <th className={styles.th} >N° Orden Mercado Pago</th>
                        <th className={styles.th}>Fecha</th>
                        <th className={styles.th}>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {ventas.map((venta, index) =>
                        index !== ventas.length - 1?(
                            <tr key={venta.id} className={styles.tr}>
                                <td className={styles.tdNombre}>{venta.Cliente.nombre} VISA-POS</td>
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
                                <td className={styles.td}>${venta.total_venta}</td>
                            </tr>
                        ):(
                            <tr key={venta.id} className={styles.lastTr} >
                            <td className={styles.tdNombre}>{venta.Cliente.nombre} VISA-POS</td>
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
                            <td className={styles.td}>${venta.total_venta}</td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default VentasComponent;