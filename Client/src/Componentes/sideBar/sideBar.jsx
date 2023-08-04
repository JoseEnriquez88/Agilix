import styles from "./Sidebar.module.css"
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const Sidebar = () => {
    const [direccionFlecha, setDireccionFlecha] = useState("atras")
    const [anchoReducido, setAnchoReducido] = useState(false);
    const cambiarDireccionFlecha = () => {
        setDireccionFlecha(direccionFlecha === "atras" ? "adelante" : "atras")
        setAnchoReducido(!anchoReducido)
    }
    return (
        <nav className={anchoReducido ? styles.sidebarReducido : styles.sidebar} >
            {direccionFlecha === "atras" ?
                <h1 className={styles.botonCerrar} onClick={cambiarDireccionFlecha}><ArrowBackIosIcon className={styles.arrow} /></h1> :
                <h1 className={styles.botonCerrar} onClick={cambiarDireccionFlecha}><ArrowForwardIosIcon className={styles.arrow} /></h1>
            }

            <h1 className={anchoReducido? styles.logoAgilixReducido : styles.logoAgilix} >{anchoReducido ? "A" : "Agilix"}</h1>
            <div className={anchoReducido ? styles.contenedorReducido : styles.contenedor} >
                {
                    !anchoReducido && (
                        <>
                            <h5>CUENTA/USUARIO</h5>
                            <NavLink className={styles.NavLink} to='/'>General</NavLink>
                            <NavLink className={styles.NavLink} to='/cuentas'>Cuentas</NavLink>
                            <NavLink className={styles.NavLink} to='/actualizaciones'>Actualizaciones</NavLink>
                            <NavLink className={styles.NavLink} to='/ordenes' >Órdenes</NavLink>
                            <NavLink className={styles.NavLink} to='/configuracion' >Configuracion</NavLink>
                        </>
                    )
                }

            </div>
            <div className={anchoReducido ? styles.contenedorReducido : styles.contenedor}>
                {
                    !anchoReducido && (
                        <>
                            <h5>PRODUCTOS</h5>
                            <NavLink className={styles.NavLink} to='/añadirProducto'>Añadir Producto</NavLink>
                            <NavLink className={styles.NavLink} to='/misProductos'>Mis Productos</NavLink>
                            <NavLink className={styles.NavLink} to='/inventario'>Inventario</NavLink>
                        </>
                    )
                }

            </div>
            <div className={anchoReducido ? styles.contenedorUsuariosReducido : styles.contenedorUsuarios}>
                {
                    !anchoReducido && (
                        <>
                            <h5>USUARIOS</h5>
                            <NavLink className={styles.NavLink} to='/configPerfil' >Configuración de Perfil</NavLink>
                            <NavLink className={styles.NavLink} to='/admin'>Administrar Usuario</NavLink>
                            <NavLink className={styles.NavLink}>Cerrar sesión</NavLink>
                        </>
                    )
                }
            </div>
        </nav>
    )
}