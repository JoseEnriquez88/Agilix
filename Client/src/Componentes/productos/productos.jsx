import cocacola from '../productos/Cocacola.png'
import papa from '../productos/papa.png'
import jamon from '../productos/jamon.png'
import jabon from '../productos/jabon.png'
import Pasta from '../productos/Pasta.png'
import shampoo from '../productos/shampoo.png'
import styles from './productos.module.css'
const Productos = () => {
    return (
  <div className={styles.contenedor}>
<div className={styles.cards}>
    <img  className={styles.imagen} src={cocacola} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>Coca - Cola</h2>
    <h3 className={styles.precio}>1.5 $</h3>
    </div>
</div>
<div className={styles.cards}>
    <img  className={styles.imagen} src={papa} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>Papa</h2>
    <h3 className={styles.precio}>0.5 $</h3>
    </div>
</div>
<div className={styles.cards}>
    <img  className={styles.imagen} src={jamon} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>Jamón (1kg)</h2>
    <h3 className={styles.precio}>5 $</h3>
    </div>
</div>

<div className={styles.cards}>
    <img  className={styles.imagen} src={jabon} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>Jabon (Protex)</h2>
    <h3 className={styles.precio}>5 $</h3>
    </div>
</div>

<div className={styles.cards}>
    <img  className={styles.imagen} src={Pasta} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>Pasta (Barilla)</h2>
    <h3 className={styles.precio}>3.5 $</h3>
    </div>
</div>

<div className={styles.cards}>
    <img  className={styles.imagen} src={shampoo} alt=""/>
    <div className={styles.contenedorPP}>
    <h2 className={styles.nombre}>Shampoo(Dove)</h2>
    <h3 className={styles.precio}>1.5 $</h3>
    </div>
</div>

</div>   



 )
}
export default Productos;