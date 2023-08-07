import { useState } from "react";
import { NavLink } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import LiquorIcon from '@mui/icons-material/Liquor';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
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
        <h1 className={styles.botonAbrir} onClick={cambiarDireccionFlecha}>
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
        {anchoReducido ? "A" : "Agilix"}
      </h1>
      <div
        className={
          anchoReducido ? styles.contenedorReducido : styles.contenedor
        }
      >
        {!anchoReducido && (
          <>
            <h5>CUENTA / USUARIO</h5>
            <NavLink className={styles.NavLink} to="/">
              General
              <HomeIcon className={styles.iconSideBar} />
            </NavLink>
            <NavLink className={styles.NavLink} to="/cuentas">
              Cuentas
              <AttachMoneyIcon className={styles.iconSideBar} />
            </NavLink>
            <NavLink className={styles.NavLink} to="/clientes">
              Clientes
              <SupervisorAccountIcon className={styles.iconSideBar} />
            </NavLink>
            <NavLink className={styles.NavLink} to="/configuracion">
              Configuración
              <SettingsIcon className={styles.iconSideBar} />
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
              <AddCircleIcon className={styles.iconSideBar} />
            </NavLink>
            <NavLink className={styles.NavLink} to="/misProductos">
              Mis Productos
              <LiquorIcon className={styles.iconSideBar} />
            </NavLink>
            <NavLink className={styles.NavLink} to="/inventario">
              Inventario
              <InventoryIcon className={styles.iconSideBar} />
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
              <PersonIcon className={styles.iconSideBar} />
            </NavLink>
            <NavLink className={styles.NavLink} to="/admin">
              Administrar Usuario
              <ManageAccountsIcon className={styles.iconSideBar} />
            </NavLink>
            <NavLink
            className={styles.NavLink}>Cerrar sesión
            <LogoutIcon className={styles.iconSideBar} />
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
