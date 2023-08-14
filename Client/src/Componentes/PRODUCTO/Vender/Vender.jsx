import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "./Cardproducto/Card";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./Vender.module.css";

const Vender = () => {
    const productos = useSelector((state) => state.product);
    return (
        <div className={styles.ContenedorVender}>
            <div className={styles.ContenedorBotonBackYCarrito}>
                <NavLink to='/' className={styles.BotonBack}>
                    <ArrowBackIosNewIcon className={styles.IconoBack}/>
                </NavLink>

                <NavLink to='/detalle_de_compra' className={styles.BotonCarrito}>
                    <ShoppingCartIcon/> Carrito
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
                    {productos.allProducts ? (
                        productos.allProducts.map(({ id, nombre, img, precio }) => (
                            <Card key={id} id={id} nombre={nombre} img={img} precio={precio} />
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