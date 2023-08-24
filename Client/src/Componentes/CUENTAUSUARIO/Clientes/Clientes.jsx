import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientes } from "../../../Redux/clientesSlice";
import {deleteClientes} from "../../../Redux/clientesSlice"
import { NavLink } from "react-router-dom";
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
import styles from "./Clientes.module.css";
import RefreshIcon from "@mui/icons-material/Refresh";


const handleRefresh = () => {
  window.location.reload();
};

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  useEffect(() => {
    dispatch(fetchClientes());
  }, [dispatch]);
  const handlerEstado = (id,estado) => {
    dispatch(deleteClientes({id,estado}));
    handleRefresh();
  }

  if (!clientes.allClientes) {
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.CrearCliente}>
          <NavLink to="/crearcliente" style={{ textDecoration: "none" }}>
            Crear Cliente
          </NavLink>
        </button>
      </div>
    );
  }
  return (
    <div>
      <h1 className={styles.tittle}>Lista de Clientes</h1>
      <div className={styles.container}>
        <button id="refresh" className={styles.refresh} onClick={handleRefresh}>
          <RefreshIcon />
        </button>
        <button className={styles.CrearCliente}>
          <NavLink to="/crearcliente" style={{ textDecoration: "none" }}>
            Crear Cliente
            {/* <PersonAddIcon className={styles.icon} /> */}
          </NavLink>
        </button>

        <ol className={styles.clienteList}>
          {clientes.allClientes.map((cliente) => (
            <li className={styles.clienteRow} key={cliente.id}>
              <div className={styles.clienteInfo}>
                <span className={styles.tituloPrincipal}>Nombre:</span>
                <p className={styles.nombreCliente}>
                  {cliente.nombre} {cliente.apellido}
                </p>
              </div>
              <div className={styles.clienteInfo}>
                <span className={styles.tituloPrincipal}>Teléfono:</span>
                <p className={styles.telefonoCliente}>{cliente.telefono}</p>
              </div>
              <div className={styles.clienteInfo}>
                <span className={styles.tituloPrincipal}>Email:</span>
                <p className={styles.clienteEmail}>{cliente.email}</p>
              </div>
              <div className={styles.clienteInfo}>
                <span className={styles.tituloPrincipal}>DNI:</span>
                <p className={styles.clienteEmail}>{cliente.dni}</p>
              </div>
              <div className={styles.divDetalle}>
                <button className={styles.botonDetalle} onClick={() => handlerEstado(cliente.id,!cliente.estado)}>
                  {(cliente.estado === true) ? "Habilitado": "Deshabilitado"}
                </button>
              </div>
              <div className={styles.divDetalle} >
                <button className={styles.botonDetalle}>
                  <NavLink to={`/clientes/${cliente.id}`} >
                    Detalle
                  </NavLink>
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Clientes;
