import React from "react";
import Card from "../Card_Producto_F_Stock/Card_Producto_F_Stock";
import styles from "./Productos_F_Stock.module.css";
import { useSelector } from "react-redux";

const Productos_F_Stock = ({ productos }) => {
  const prod = useSelector((state) => state.product);

  return (
    <div className={styles.ContenedorProductos}>
      <div className={styles.ContenedorTitulo}>
        <h2>Productos fuera de stock</h2>
      </div>
      <div className={styles.ContenedorCards}>
        {prod.allProducts ? (
          productos.allProducts.map(({ id, nombre, img, precio }) => (
            <Card key={id} id={id} nombre={nombre} img={img} precio={precio} />
          ))
        ) : (
          <span className={styles.NoHayProductos}>No hay productos fuera de stock</span>
        )}
      </div>
    </div>
  );
};

export default Productos_F_Stock;
