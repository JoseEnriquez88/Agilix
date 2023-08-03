import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/productosSlice";
import styles from "./productos.module.css";

const Productos = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(product);
  return (
    <div>
      <h1 className={styles.tittle}>Listado de Productos</h1>
      {product.loading && <div>Cargando...</div>}
      {!product.loading && product.error ? (
        <div>Error: {product.error}</div>
      ) : null}
      {!product.loading && product.allProducts.length ? (

        <div className={styles.contenedor}>
          {product.allProducts.map((prod) => (

            <div className={styles.cards} key={prod.id}>
              <img className={styles.imagen} src={prod.img} />
              <div className={styles.contenedorLetras}>
                <h1>{prod.nombre} </h1>
                <h3> ${prod.precio}</h3>
              </div>
            </div>


          ))}
        </div>
      ) : null}
    </div>
  );
};
export default Productos;