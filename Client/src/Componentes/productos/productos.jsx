import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/productSlice";

const Productos = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(product);
  return (
    <div>
      <h2>Listado de Productos</h2>
      {product.loading && <div>Cargando...</div>}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading && product.allProducts ? (
        <ul>
          {product.allProducts.map((prod) => (
            <li key={prod.id}>
              {prod.nombre} - ${prod.precio}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Productos;

// import imagen from './ejemplo.png'
// import styles from './productos.module.css'
// const Productos = () => {
//     return (
//   <div className={styles.contenedor}>
// <div className={styles.cards}>
//     <img  className={styles.imagen} src={imagen} alt=""/>
//     <div className={styles.contenedorPP}>
//     <h2 className={styles.nombre}>producto</h2>
//     <h3 className={styles.precio}>50$</h3>
//     </div>
// </div>
// <div className={styles.cards}>
//     <img  className={styles.imagen} src={imagen} alt=""/>
//     <div className={styles.contenedorPP}>
//     <h2 className={styles.nombre}>producto</h2>
//     <h3 className={styles.precio}>80$</h3>
//     </div>
// </div>
// <div className={styles.cards}>
//     <img  className={styles.imagen} src={imagen} alt=""/>
//     <div className={styles.contenedorPP}>
//     <h2 className={styles.nombre}>producto</h2>
//     <h3 className={styles.precio}>120$</h3>
//     </div>
// </div>
// <div className={styles.cards}>
//     <img  className={styles.imagen} src={imagen} alt=""/>
//     <div className={styles.contenedorPP}>
//     <h2 className={styles.nombre}>producto</h2>
//     <h3 className={styles.precio}>190$</h3>
//     </div>
// </div>
// </div>
