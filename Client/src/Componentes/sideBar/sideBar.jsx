import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import LiquorIcon from "@mui/icons-material/Liquor";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import HomeIcon from "@mui/icons-material/Home";
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
        {!anchoReducido ? (
          <>
            <h5>CUENTA / USUARIO</h5>
            <NavLink
              className={styles.NavLink}
              to="/"
              onClick={cambiarDireccionFlecha}
            >
              <HomeIcon className={styles.iconSideBar} />
              General
            </NavLink>
            <NavLink
              className={styles.NavLink}
              to="/cuentas"
              onClick={cambiarDireccionFlecha}
            >
              <AttachMoneyIcon className={styles.iconSideBar} />
              Cuentas
            </NavLink>
            <NavLink
              className={styles.NavLink}
              to="/clientes"
              onClick={cambiarDireccionFlecha}
            >
              <SupervisorAccountIcon className={styles.iconSideBar} />
              Clientes
            </NavLink>
            <NavLink
              className={styles.NavLink}
              to="/configuracion"
              onClick={cambiarDireccionFlecha}
            >
              <SettingsIcon className={styles.iconSideBar} />
              Configuración
            </NavLink>
          </>
        ) : (
          <>
            <HomeIcon className={styles.iconSideBarReducido} />
            <AttachMoneyIcon className={styles.iconSideBarReducido} />
            <SettingsIcon className={styles.iconSideBarReducido} />
          </>
        )}
      </div>
      <div
        className={
          anchoReducido ? styles.contenedorReducido : styles.contenedor
        }
      >
        {!anchoReducido ? (
          <>
            <h5>PRODUCTOS</h5>
            <NavLink
              className={styles.NavLink}
              to="/añadirProducto"
              onClick={cambiarDireccionFlecha}
            >
              <AddCircleIcon className={styles.iconSideBar} />
              Añadir Producto
            </NavLink>
            <NavLink
              className={styles.NavLink}
              to="/misProductos"
              onClick={cambiarDireccionFlecha}
            >
              <LiquorIcon className={styles.iconSideBar} />
              Mis Productos
            </NavLink>
            <NavLink
              className={styles.NavLink}
              to="/inventario"
              onClick={cambiarDireccionFlecha}
            >
              <InventoryIcon className={styles.iconSideBar} />
              Inventario
            </NavLink>
          </>
        ) : (
          <>
            <AddCircleIcon className={styles.iconSideBarReducido} />
            <LiquorIcon className={styles.iconSideBarReducido} />
            <InventoryIcon className={styles.iconSideBarReducido} />
          </>
        )}
      </div>
      <div className={styles.contenedorUsuarios}>
        {!anchoReducido ? (
          <>
            <h5>USUARIOS</h5>
            <NavLink
              className={styles.NavLink}
              to="/configPerfil"
              onClick={cambiarDireccionFlecha}
            >
              <PersonIcon className={styles.iconSideBar} />
              Configuración de Perfil
            </NavLink>
            <NavLink
              className={styles.NavLink}
              to="/admin"
              onClick={cambiarDireccionFlecha}
            >
              <ManageAccountsIcon className={styles.iconSideBar} />
              Administrar Usuario
            </NavLink>
            <NavLink
              className={styles.NavLink}
              onClick={cambiarDireccionFlecha}
            >
              <LogoutIcon className={styles.iconSideBar} />
              Cerrar sesión
            </NavLink>
          </>
        ) : (
          <>
            <PersonIcon className={styles.iconSideBarReducido} />
            <ManageAccountsIcon className={styles.iconSideBarReducido} />
            <LogoutIcon className={styles.iconSideBarReducido} />
          </>
        )}
      </div>
    </nav>
  );
};
