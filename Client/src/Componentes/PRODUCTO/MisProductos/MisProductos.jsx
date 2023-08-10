import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ordenAlfabetico,
  ordenPorPrecio,
  restablecerOrdenamientos,
  fetchProducts,
  deleteProduct,
} from "../../../Redux/productSlice";
import { useState, useEffect } from "react";
import styles from "./MisProductos.module.css";

const MisProductos = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [resetSeleccion, setResetSeleccion] = useState({
    ordenAlfabetico: "",
    ordenPorPrecio: "",
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // Handler del ordenamiento alfabetico
  const handleChange = (event) => {
    setResetSeleccion({
      ...resetSeleccion,
      ordenAlfabetico: event.target.value,
    });
    dispatch(ordenAlfabetico(event.target.value));
  };

  // Handler del ordenamiento por precio
  const handleSortPrecio = (event) => {
    setResetSeleccion({
      ...resetSeleccion,
      ordenPorPrecio: event.target.value,
    });
    dispatch(ordenPorPrecio(event.target.value));
  };

  // Handler del reseteo de ordenamientos
  const handleReset = () => {
    setResetSeleccion({
      ordenAlfabetico: "A_Z_predeterminado",
      ordenPorPrecio: "Precio_predeterminado",
    });
    dispatch(restablecerOrdenamientos());
  };
  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId)); // Disparar la acción de eliminación
  };

  return (
    <div>
      <h1 className={styles.tittle}>Listado de Productos</h1>
      <div className={styles.contenedorSelector}>
        <select
          className={styles.selectores}
          onChange={handleChange}
          value={resetSeleccion.ordenAlfabetico}
        >
          <option disabled={true}>Orden Alfabético</option>
          <option value="A_Z_predeterminado">Predeterminado</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
        <select
          className={styles.selectores}
          onChange={handleSortPrecio}
          value={resetSeleccion.ordenPorPrecio}
        >
          <option disabled={true}>Ordenar por precio</option>
          <option value="Precio_predeterminado">Predeterminado</option>
          <option value="precioMax">Mayor Precio</option>
          <option value="precioMin">Menor Precio</option>
        </select>
        <button className={styles.buttonReset} onClick={handleReset}>
          Restablecer Ordenamiento
        </button>
      </div>

      {product.loading && <div>Cargando...</div>}
      {!product.loading && product.error ? (
        <div style={{ color: "white" }}>{product.error}</div>
      ) : null}

      {!product.loading && product.allProducts ? (
        <div className={styles.contenedor}>
          {product.productosFiltrados.map((prod) => (
            <div className={styles.cards} key={prod.id}>
              <img className={styles.imagen} src={`/assets/${prod.img}`} />
              <div className={styles.contenedorLetras}>
                <h1>{prod.nombre} </h1>
                <h3> ${prod.precio}</h3>
                <button
                  className={styles.botonEliminar}
                  onClick={() => handleDelete(prod.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
export default MisProductos;
