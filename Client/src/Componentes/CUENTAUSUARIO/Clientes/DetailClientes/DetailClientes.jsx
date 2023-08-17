import { useParams } from "react-router-dom";
import styles from "./DetailClientes.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getClientById } from "../../../../Redux/clientesSlice";
import React, { useEffect } from "react";

const DetailCliente = () => {
  const dispatch = useDispatch();
  const cliente = useSelector((state) => state.clientes.clientById);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getClientById(id));
  }, [dispatch]);
  return (
    <div className={styles.contenedorPrincipal}>
      <h1>Detalle del Cliente {cliente.nombre}</h1>
      <table className={styles.tabla} >
        <caption>
          Últimas compras
        </caption>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID de Compra</th>
            <th>Productos</th>
            <th>Fecha</th>
            <th>Total Compra </th>
          </tr>
        </thead>
        <tbody>
          {cliente.Venta?.map((vent) => (
            <tr key={vent.id} >
              <td >{cliente.nombre}</td>
              <td >{vent.id}</td>
              <td >
                {vent.Productos?.map((prod, index) => ( //productos está dentro de Venta
                  <span key={prod.id}>
                    {prod.nombre}
                    {index !== vent.Productos.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </td>
              <td >{vent.fecha}</td>
              <td >{vent.total_venta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DetailCliente;