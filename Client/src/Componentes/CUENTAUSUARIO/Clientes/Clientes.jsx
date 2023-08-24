import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteClientes} from "../../../Redux/clientesSlice"
import { NavLink } from "react-router-dom";
import styles from "./Clientes.module.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SearchBar from "./SearchBar/SearchBar";

const handleRefresh = () => {
  window.location.reload();
};

const Clientes = () => {
  const dispatch = useDispatch();
  const clientes = useSelector((state) => state.clientes);

  const handlerEstado = (id,estado) => {
    dispatch(deleteClientes({id,estado}));
    handleRefresh();
  }

  if (!clientes.clientesFiltrados) {
    return (
      <div className={styles.buttonContainer}>
        <div className={styles.ContenedorBotonBack}>
          <NavLink to='/' className={styles.BotonBack}>
              <ArrowBackIosNewIcon className={styles.IconoBack} />
          </NavLink>
      </div>
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
      <div className={styles.ContenedorBotonBack}>
        <NavLink to='/' className={styles.BotonBack}>
          <ArrowBackIosNewIcon className={styles.IconoBack} />
        </NavLink>
      </div>
      <h1 className={styles.tittle}>Lista de Clientes</h1>
      <div><SearchBar/></div>
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
          {clientes.clientesFiltrados.map((cliente) => (
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
