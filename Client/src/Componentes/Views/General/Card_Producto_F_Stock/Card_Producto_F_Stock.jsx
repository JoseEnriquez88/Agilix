import React from "react";
import styles from "./Card_Producto_F_Stock.module.css";

const Card = (props) => {
  const { id, nombre, img, precio } = props;
  return (
    <div className={styles.ContenedorCard}>
      <div className={styles.ContenedorImagen}>
        <img src={`/assets/${img}`} alt={nombre} className={styles.Imagen} />
      </div>
      <div className={styles.ContenedorInfo}>
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        {/* <p>${precio}</p> */}
      </div>
    </div>
  );
};

export default Card;
