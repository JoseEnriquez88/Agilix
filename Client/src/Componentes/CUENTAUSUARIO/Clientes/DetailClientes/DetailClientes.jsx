import { useParams } from "react-router-dom";
import{ useDispatch, useSelector } from "react-redux";
import { getClientById } from "../../../../Redux/clientesSlice";
import { useEffect } from "react";

const DetailCliente = () => {
    const dispatch = useDispatch();
    const cliente = useSelector((state) => state.clientes.clientById);
    const { id } = useParams();
    useEffect(() => {
        dispatch(getClientById(id));
     },[dispatch]);
    return (
        <div>
            <h1>Detalle del Cliente {cliente.nombre}</h1>
            <table>
              <tr>
                <th>Nombre</th>
                <th>Productos</th>
                <th>ID de Compra</th>
                <th>Fecha</th>
              </tr>
              {
                cliente.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.productos}</td>
                    <td>{cliente.idCompra}</td>{/* hacer relacion */}
                    <td>{cliente.fecha}</td>
                  </tr>

                ))
              }
            </table>
            
            
        </div>
    );
};
export default DetailCliente;