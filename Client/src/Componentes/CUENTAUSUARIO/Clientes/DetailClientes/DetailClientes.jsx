import { useParams } from "react-router-dom";
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
    <div>
      <h1>Detalle del Cliente {cliente.nombre}</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Productos</th>
            <th>ID de Compra</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{cliente.nombre}</td>
          {/* falta relacion para el renderizado no hay producto ni id de compra ni fecha relacionados*/}
          {/* <td>{cliente.productos}</td>
          <td>{cliente.idCompra}</td>
          <td>{cliente.fecha}</td> */}
        </tr>
        </tbody>
      </table>
    </div>
  );
};
export default DetailCliente;