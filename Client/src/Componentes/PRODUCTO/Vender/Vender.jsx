import { useSelector } from "react-redux";
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
    return (
        <div className={styles.ContenedorVender}>
            <div>
                <h1 className={styles.tittle}>Venta de productos</h1>
            </div>
            {/* <button onClick={handleRecargarProductos} className={styles.BotonBack}>
            <RefreshIcon />
            </button> */}
            <div className={styles.ContenedorBotonBackYCarrito}>
                <NavLink to='/' className={styles.BotonBack}>
                    <ArrowBackIosNewIcon className={styles.IconoBack}/>
                </NavLink>

                <NavLink to='/detalle_de_compra' className={styles.BotonCarrito}>
                    <ShoppingCartIcon/> Carrito
                </NavLink>
            </div>
            <div>
                <h2>Lista de productos</h2>
            </div>
            <div className={styles.ContenedorGeneralCards}>
                <div className={styles.ContenedorCards}>
                    {productos.allProducts ? (
                        productos.allProducts.map(({ id, nombre, img, precio,stock }) => (
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