import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ordenAlfabetico,
  ordenPorPrecio,
  filtroPorTipo,
  restablecerOrdenamientos,
  deleteProduct,

} from "../../../Redux/productSlice";
import Paginado from "./Paginado/Paginado";
import { useState } from "react";
import styles from "./MisProductos.module.css";

const MisProductos = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [resetSeleccion, setResetSeleccion] = useState({
    ordenAlfabetico: "",
    ordenPorPrecio: "",
  });

  // Lista de tipos de productos
  const tipos = ["Químicos", "Consumibles", "Hogar", "Otros"];

  // Estados para el paginado
  const [currentPage, setCurrentPage] = useState(1);//pagina actual
  const [productosPorPagina, setProductosPorPagina] = useState(6);//cantidad de items por pagina
  const [order, setOrder] = useState("")//orden
  const indexLastItem = currentPage * productosPorPagina;//indice del ultimo item
  const indexFirstItem = indexLastItem - productosPorPagina;//indice del primer item

  // Handler del ordenamiento alfabetico
  const handleChange = (event) => {
    setResetSeleccion({
      ...resetSeleccion,
      ordenAlfabetico: event.target.value,
    });
    if (event.target.value === "asc" || event.target.value === "desc") {
      dispatch(ordenAlfabetico(event.target.value));
    } else {
      dispatch(ordenPorPrecio(event.target.value));
    }
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
  const currentItem = product.productosFiltrados.slice(indexFirstItem, indexLastItem);//corta la cantidad de items que necesito mostrar según los indices a partir del estado global
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filtrarProductoPorTipo = (event) => {
    dispatch(restablecerOrdenamientos());
    dispatch(filtroPorTipo(event.target.value));
  }

  return (
    <div>
      <h1 className={styles.tittle}>Listado de Productos</h1>
      <div className={styles.contenedorSelector}>
        <select onChange={filtrarProductoPorTipo} className={styles.selectores}>
          <option disabled={true}>Filtrar Producto</option>
          <option value="todos">Tipos</option>
          <option value="frutas">Frutas</option>
          <option value="verduras">Verduras</option>
          <option value="bebidas">Bebidas</option>
          <option value="abarrotes">Abarrotes</option>
          <option value="carnes">Carnes</option>
        </select>
        <select className={styles.selectores} onChange={handleChange} value={resetSeleccion.ordenAlfabetico}>
          <option disabled={true}>Orden Alfabético</option>
          <option value="A_Z_predeterminado">Orden Alfabético</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
          <option value="precioMax">Mayor Precio</option>
          <option value="precioMin">Menor Precio</option>
        </select>
        <button className={styles.buttonReset} onClick={handleReset}>Restablecer Ordenamiento</button>
      </div>

      {product.loading && <div>Cargando...</div>}
      {!product.loading && product.error ? (
        <div style={{ color: "white" }}>{product.error}</div>
      ) : null}

      {!product.loading && product.productosFiltrados ? (
        <div className={styles.contenedor}>
          {currentItem.map((prod) => (
            <div className={styles.cards} key={prod.id}>
              <img className={styles.imagen} src={prod.img} />
              <div className={styles.contenedorLetras}>
                <h1>{prod.nombre} </h1>
                <h3> ${prod.precio}</h3>
                <h3>{prod.tipo}</h3>
                {prod.stock === 0 ? (
                  <p className={styles.agotado}>Agotado</p>
                ) : (

                  <p>Stock Disponible: {prod.stock}</p>
                )}
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
      <div className={styles.PaginadoContainer}>
        <Paginado className={styles.Paginado}
          productosPorPagina={productosPorPagina}
          products={product.productosFiltrados}
          paginado={paginado}
          currentPage={currentPage} />
      </div>
    </div>
  );
};
export default MisProductos;
