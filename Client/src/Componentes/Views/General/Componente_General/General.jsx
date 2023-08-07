import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Saldos from "../Saldos/Saldos";
import Comparacion_de_ventas from "../Comparacion_de_ventas/Comparacion_de_ventas";
import Pagos_recibidos from "../Pagos_recibidos/Pagos_recibidos";
import Productos_F_Stock from "../Productos_F_Stock/Productos_F_Stock";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./General.module.css";

const General = () => {
  let productos = useSelector((state) => state.product);

  return (
    //Contiene todos los componentes
    <div className={styles.DivComponenteGeneral}>
      <nav className={styles.ContenedorSearchBar}>
        <div className={styles.SearchBar}>
          <SearchBar />
        </div>
        <div className={styles.ContenedorBotones}>
          <NavLink className={styles.Boton} to="/">
            Vista General
          </NavLink>
          <NavLink className={styles.Boton} to="/clientes">
            Clientes
          </NavLink>
          <NavLink className={styles.Boton} to="/cuenta">
            Cuenta
          </NavLink>
          <NavLink className={styles.Boton} to="/pagos">
            Pagos
          </NavLink>
        </div>
      </nav>

      {/* Contiene los componentes de gráficos, pagos, saldos y productos fuera de stock */}
      <div className={styles.ContenedorGeneral}>
        <div className={styles.ContenedorMetricas}>
          <div className={styles.ContenedorSaldos}>
            <Saldos />
          </div>

          <div className={styles.ContenedorComparacion}>
            <Comparacion_de_ventas />
          </div>

          <div className={styles.ContenedorPagosRecibidos}>
            <Pagos_recibidos />
          </div>
        </div>
        <div className={styles.ContenedorProductos}>
          <div className={styles.ContenedorProductosFStock}>
            <Productos_F_Stock productos={productos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
