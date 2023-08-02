import styles from "./Sidebar.module.css"


export const Sidebar = () => {
    return (
        <nav className={styles.sidebar} >
            <h4 className={styles.botonCerrar} >X</h4>
            <h1 className={styles.logoAgilix} >AGILIX</h1>
            <div className={styles.contenedor} >
                <h5>CUENTA/USUARIO</h5>
                <h4>General</h4>
                <h4>Cuentas</h4>
                <h4>Actualizaciones</h4>
                <h4>Órdenes</h4>
                <h4>Configuracion</h4>
            </div>
            <div  className={styles.contenedor}>
                <h5>PRODUCTOS</h5>
                <h4>Añadir Producto</h4>
                <h4>Mis Productos</h4>
                <h4>Inventario</h4>
            </div>
            <div className={styles.contenedorUsuarios}>
                <h5>USUARIOS</h5>
                <h4>Configuración de Perfil</h4>
                <h4>Administrar Usuario</h4>
                <h4>Cerrar sesión</h4>
            </div>
        </nav>
    )
}