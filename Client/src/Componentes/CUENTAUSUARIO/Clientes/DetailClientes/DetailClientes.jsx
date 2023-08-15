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
            <th>ID de Compra</th>
            <th>Productos</th>
            <th>Fecha</th>
            <th>Total Compra </th>
          </tr>
        </thead>
        <tbody>
          {cliente.Venta?.map((vent) => (
            <tr key={vent.id} >
              <td>{vent.nombre}</td>
              <td>{vent.id}</td>
              <td>
                {vent.Productos?.map((prod) => (
                  <p key={prod.id}>{prod.nombre}</p>
                ))}
              </td>
              <td>{vent.fecha}</td>
              <td>{vent.total_venta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default DetailCliente;