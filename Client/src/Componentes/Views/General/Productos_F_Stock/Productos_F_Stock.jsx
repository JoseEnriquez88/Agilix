import React, { useState } from "react";
import Card from "../Card_Producto_F_Stock/Card_Producto_F_Stock";
import { useSelector } from "react-redux";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SellIcon from '@mui/icons-material/Sell';
import styles from "./Productos_F_Stock.module.css";

const Productos_F_Stock = ({ productos }) => {
  const prod = useSelector((state) => state.product);
  const [pagina, setPagina] = useState(1);
  const [productosPorPagina, setProductosPorPagina] = useState(4);
  const indexUltimoItem = pagina * productosPorPagina;
  const indexPrimerItem = indexUltimoItem - productosPorPagina;
  const totalPages = Math.ceil(productos.allProducts.length / productosPorPagina)

  const productosSliced = productos.allProducts.slice(indexPrimerItem, indexUltimoItem);

  const handlePaginaPrevia = () => {
    if(pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const handlePaginaSiguiente = () => {
    const totalPages = Math.ceil(productos.allProducts.length / productosPorPagina);
    if (pagina < totalPages) {
        setPagina(pagina + 1);
    }
  };

  return (
    <div className={styles.ContenedorProductos}>
      <div className={styles.ContenedorTitulo}>
        <h2>Productos<SellIcon className={styles.iconoSell}/></h2>
      </div>
      {prod.allProducts.length > 0 ? <div className={styles.contenedorBotonPrevio}>
        <button disabled={pagina === 1} onClick={handlePaginaPrevia} className={styles.botonPrevio}><ArrowDropUpIcon/></button>
      </div> : <span className={styles.NoHayProductos}>No hay productos fuera de stock</span>}
      <div className={styles.ContenedorCards}>
        {prod.allProducts ? (
          productosSliced.map(({ id, nombre, img, precio }) => (
            <Card key={id} id={id} nombre={nombre} img={img} precio={precio} />
          ))
        ) : (
          <span className={styles.NoHayProductos}>No hay productos fuera de stock</span>
        )}
      </div>
      {prod.allProducts.length > 0 ? <div className={styles.contenedorBotonSiguiente}>
        <button disabled={pagina === totalPages} onClick={handlePaginaSiguiente} className={styles.botonSiguiente}><ArrowDropDownIcon/></button>
      </div> : <span></span>}
    </div>
  );
};

export default Productos_F_Stock;