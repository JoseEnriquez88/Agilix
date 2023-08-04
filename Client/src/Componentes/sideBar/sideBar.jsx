import styles from "./Sidebar.module.css"
import {NavLink} from 'react-router-dom'



export const Sidebar = () => {
    return (
        <nav className={styles.sidebar} >
            <h4 className={styles.botonCerrar} >X</h4>
            <h1 className={styles.logoAgilix} >AGILIX</h1>
            <div className={styles.contenedor} >
                <h5>CUENTA/USUARIO</h5>
                <NavLink className={styles.NavLink} to ='/'>General</NavLink>
                <NavLink className={styles.NavLink} to ='/cuentas'>Cuentas</NavLink>
                <NavLink className={styles.NavLink} to ='/actualizaciones'>Actualizaciones</NavLink>
                <NavLink className={styles.NavLink} to='/ordenes' >Órdenes</NavLink>
                <NavLink className={styles.NavLink} to ='/configuracion' >Configuracion</NavLink>
            </div>
            <div  className={styles.contenedor}>
                <h5>PRODUCTOS</h5>
                <NavLink className={styles.NavLink} to ='/añadirProducto'>Añadir Producto</NavLink>
                <NavLink className={styles.NavLink} to='/misProductos'>Mis Productos</NavLink>
                <NavLink className={styles.NavLink} to='/inventario'>Inventario</NavLink>
            </div>
            <div className={styles.contenedorUsuarios}>
                <h5>USUARIOS</h5>
                <NavLink className={styles.NavLink} to='/configPerfil' >Configuración de Perfil</NavLink>
                <NavLink className={styles.NavLink} to= '/admin'>Administrar Usuario</NavLink>
                <NavLink className={styles.NavLink}>Cerrar sesión</NavLink>
            </div>
        </nav>
    )
}