import { useState } from "react";
import { NavLink } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import styles from "./sideBar.module.css";

export const Sidebar = () => {
  const [direccionFlecha, setDireccionFlecha] = useState("atras");
  const [anchoReducido, setAnchoReducido] = useState(true);
  const cambiarDireccionFlecha = () => {
    setDireccionFlecha(direccionFlecha === "atras" ? "adelante" : "atras");
    setAnchoReducido(!anchoReducido);
  };
  return (
    <nav className={anchoReducido ? styles.sidebarReducido : styles.sidebar}>
      {direccionFlecha === "atras" ? (
        <h1 className={styles.botonCerrar} onClick={cambiarDireccionFlecha}>
          <DensityMediumIcon className={styles.arrow} />
        </h1>
      ) : (
        <h1 className={styles.botonCerrar} onClick={cambiarDireccionFlecha}>
          <ClearIcon className={styles.arrow} />
        </h1>
      )}

      <h1
        className={
          anchoReducido ? styles.logoAgilixReducido : styles.logoAgilix
        }
      >
        {anchoReducido ? "Ax" : "Agilix"}
      </h1>
      <div
        className={
          anchoReducido ? styles.contenedorReducido : styles.contenedor
        }
      >
        {!anchoReducido && (
          <>
            <h5>CUENTA/USUARIO</h5>
            <NavLink className={styles.NavLink} to="/">
              General
            </NavLink>
            <NavLink className={styles.NavLink} to="/cuentas">
              Cuentas
            </NavLink>
            <NavLink className={styles.NavLink} to="/clientes">
              Clientes
            </NavLink>
            <NavLink className={styles.NavLink} to="/configuracion">
              Configuracion
            </NavLink>
          </>
        )}
      </div>
      <div
        className={
          anchoReducido ? styles.contenedorReducido : styles.contenedor
        }
      >
        {!anchoReducido && (
          <>
            <h5>PRODUCTOS</h5>
            <NavLink className={styles.NavLink} to="/añadirProducto">
              Añadir Producto
            </NavLink>
            <NavLink className={styles.NavLink} to="/misProductos">
              Mis Productos
            </NavLink>
            <NavLink className={styles.NavLink} to="/inventario">
              Inventario
            </NavLink>
          </>
        )}
      </div>
      <div
        className={
          anchoReducido
            ? styles.contenedorUsuariosReducido
            : styles.contenedorUsuarios
        }
      >
        {!anchoReducido && (
          <>
            <h5>USUARIOS</h5>
            <NavLink className={styles.NavLink} to="/configPerfil">
              Configuración de Perfil
            </NavLink>
            <NavLink className={styles.NavLink} to="/admin">
              Administrar Usuario
            </NavLink>
            <NavLink className={styles.NavLink}>Cerrar sesión</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
