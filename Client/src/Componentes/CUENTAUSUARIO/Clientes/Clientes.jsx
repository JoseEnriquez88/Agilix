import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientes } from "../../../Redux/clientesSlice";
import { NavLink } from "react-router-dom";
import styles from "./Clientes.module.css";

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(fetchClientes());
  }, [dispatch]);

  if (!clientes.allClientes) {
    return (
      <div>
      <button className={styles.CrearCliente}>
        <NavLink to='/crearcliente' style={{ textDecoration: 'none' }}>
          Crear Cliente
        </NavLink>
      </button>

      </div>
    )
  }
  return (
    <div>
    <div className={styles.container}>
      <button className={styles.CrearCliente}>
        <NavLink to='/crearcliente' style={{ textDecoration: 'none' }}>
          Crear Cliente
        </NavLink>
      </button>

      <ol className={styles.clienteList}>
        {clientes.allClientes.map((cliente) => (
          <li className={styles.clienteRow} key={cliente.id}>
            <div className={styles.clienteInfo}>
              <span className={styles.tituloPrincipal}>Nombre:</span>
              <p className={styles.nombreCliente}>{cliente.nombre} {cliente.apellido}</p>
            </div>
            <div className={styles.clienteInfo}>
              <span className={styles.tituloPrincipal}>Teléfono:</span>
              <p className={styles.telefonoCliente}>{cliente.telefono}</p>
            </div>
            <div className={styles.clienteInfo}>
              <span className={styles.tituloPrincipal}>Email:</span>
              <p className={styles.clienteEmail}>{cliente.email}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
};

export default Clientes;



