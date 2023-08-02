import imagen from './ejemplo.png'
import styles from './productos.module.css'
const Productos = () => {
    return (
  <div className={styles.contenedor}>
<div className={styles.cards}>
    <img  className={styles.imagen} src={imagen} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>producto</h2>
    <h3 className={styles.precio}>50$</h3>
    </div>
</div>
<div className={styles.cards}>
    <img  className={styles.imagen} src={imagen} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>producto</h2>
    <h3 className={styles.precio}>80$</h3>
    </div>
</div>
<div className={styles.cards}>
    <img  className={styles.imagen} src={imagen} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>producto</h2>
    <h3 className={styles.precio}>120$</h3>
    </div>
</div>
<div className={styles.cards}>
    <img  className={styles.imagen} src={imagen} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>producto</h2>
    <h3 className={styles.precio}>190$</h3>
    </div>
</div>
</div>   



 )
}
export default Productos;