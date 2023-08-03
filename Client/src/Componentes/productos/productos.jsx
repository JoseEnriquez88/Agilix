import React, { useEffect } from "react";
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
      {!product.loading && product.allProducts.length ? (
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
