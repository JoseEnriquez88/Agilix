import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Saldos from "../Saldos/Saldos";
import Comparacion_de_ventas from "../Comparacion_de_ventas/Comparacion_de_ventas";
import Pagos_recibidos from "../Pagos_recibidos/Pagos_recibidos";
import Productos_F_Stock from "../Productos_F_Stock/Productos_F_Stock";
// import SearchBar from "../SearchBar/SearchBar";
import Logged from "../../Logged/Logged"
import styles from "./General.module.css";

const General = (userDetails) => {
  const user = userDetails.user
  let productos = useSelector((state) => state.product);

  return (
    //Contiene todos los componentes
    <div className={styles.DivComponenteGeneral}>
      <Logged user={user} />
      <nav className={styles.ContenedorSearchBar}>
        <div className={styles.SearchBar}>
          {/* <SearchBar /> */}
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
