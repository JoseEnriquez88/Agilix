import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Cardproducto/Card";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./Vender.module.css";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../../Redux/productSlice';
import RefreshIcon from "@mui/icons-material/Refresh";

const Vender = () => {
    const dispatch = useDispatch();
    const productos = useSelector((state) => state.product);
    const handleRecargarProductos = () => {
        dispatch(fetchProducts());
      };
      const productosConEstadoTrue = productos.allProducts.filter((producto) => producto.estado === true);
    return (
        <div className={styles.ContenedorVender}>
            <button onClick={handleRecargarProductos} className={styles.BotonBack}>
            <RefreshIcon />
            </button>
            <div className={styles.ContenedorBotonBackYCarrito}>
                <NavLink to='/' className={styles.BotonBack}>
                    <ArrowBackIosNewIcon />
                </NavLink>

                <NavLink to='/detalle_de_compra' className={styles.BotonCarrito}>
                   <ShoppingCartIcon className={styles.carritoLogo}/> 
                </NavLink>
            </div>
            <div>
                <h1>Venta de productos</h1>
            </div>
            <div>
                <h2>Lista de productos</h2>
            </div>
            <div className={styles.ContenedorGeneralCards}>
                <div className={styles.ContenedorCards}>
                {productosConEstadoTrue.length > 0 ? (
                        productosConEstadoTrue.map(({ id, nombre, img, precio,stock }) => (
                            <Card key={id} id={id} nombre={nombre} img={img} precio={precio} stock={stock} />
                        ))
                    ) : (
                        <span className={styles.NoHayProductos}>No hay productos</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Vender;