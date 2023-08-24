import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { restablecerOrdenamientos } from "../../Redux/productSlice";
import { fetchClientes } from "../../Redux/clientesSlice";
import ClearIcon from "@mui/icons-material/Clear";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import LiquorIcon from "@mui/icons-material/Liquor";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./sideBar.module.css";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [direccionFlecha, setDireccionFlecha] = useState("atras");
  const [anchoReducido, setAnchoReducido] = useState(true);
  const cambiarDireccionFlecha = () => {
    setDireccionFlecha(direccionFlecha === "atras" ? "adelante" : "atras");
    setAnchoReducido(!anchoReducido);
  };
  const restablecerProductosHandler = () => {
    dispatch(restablecerOrdenamientos());
  }
  const fetchClientesHandler = () => {
    dispatch(fetchClientes());
  }
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
            <h5>GENERAL</h5>
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
              to="/clientes"
              onClick={() => {
                cambiarDireccionFlecha();
                fetchClientesHandler();
              }
              }
            >
              <SupervisorAccountIcon className={styles.iconSideBar} />
              Clientes
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/"><HomeIcon className={styles.iconSideBarReducido} /></NavLink>
            <NavLink to="/clientes" onClick={fetchClientesHandler}><SupervisorAccountIcon className={styles.iconSideBarReducido} /></NavLink>
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
              onClick={() => {
                cambiarDireccionFlecha();
                restablecerProductosHandler();
              }}
            >
              <LiquorIcon className={styles.iconSideBar} />
              Mis Productos
            </NavLink>
            <NavLink className={styles.NavLink} to="/vender" onClick ={cambiarDireccionFlecha}>
              <InventoryIcon className={styles.iconSideBar} />
              Vender
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/añadirProducto"><AddCircleIcon className={styles.iconSideBarReducido} /></NavLink>
            <NavLink to="/misProductos" onClick={restablecerProductosHandler}><LiquorIcon className={styles.iconSideBarReducido} /></NavLink>
            <NavLink to="/vender"><InventoryIcon className={styles.iconSideBarReducido} /></NavLink>
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
            <NavLink to="/configPerfil"><PersonIcon className={styles.iconSideBarReducido} /></NavLink>
            <NavLink to="/admin"><ManageAccountsIcon className={styles.iconSideBarReducido} /></NavLink>
            <NavLink><LogoutIcon className={styles.iconSideBarReducido} /></NavLink>
          </>
        )}
      </div>
    </nav>
  );
};
