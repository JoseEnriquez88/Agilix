import { useParams } from "react-router-dom";
import styles from "./DetailClientes.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getClientById } from "../../../../Redux/clientesSlice";
import React, { useEffect } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const DetailCliente = () => {
  const dispatch = useDispatch();
  const cliente = useSelector((state) => state.clientes.clientById);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getClientById(id));
  }, [dispatch]);

  const handleVolverAtras = () => {
    window.history.back();
};

  return (
    <div className={styles.contenedorPrincipal}>
      <button className={styles.BotonBack} onClick={handleVolverAtras}>
      <ArrowBackIosNewIcon className={styles.IconoBack}/>
      </button>
      <h1>Detalle del Cliente {cliente.nombre}</h1>
      <table className={styles.tabla} >
        <caption>
          Últimas compras
        </caption>
        <thead>
          <tr>
            <th>Vendedor</th>
            <th>ID de Compra</th>
            <th>Productos</th>
            <th>Fecha de Compra</th>
            <th>N° Orden Mercado Pago</th>
            <th>Total Compra </th>
          </tr>
        </thead>
        <tbody>
          {cliente.Venta?.map((vent) => (
            <tr key={vent.id} >
              <td >{vent.Usuario.nombre}</td>
              <td >{vent.id}</td>
              <td >
                {vent.Productos?.map((prod, index) => ( //productos está dentro de Venta
                  <span key={prod.id}>
                    {prod.nombre}
                    {`(${prod.Detalle_Venta.cantidad})`}
                    {index !== vent.Productos.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </td>
              <td >{new Date(vent.fecha).toLocaleString("es-ES", {  //para hacer más legible la fecha
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}</td>
              <td >{vent.id_mercado_pago}</td>
              <td >${vent.total_venta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DetailCliente;