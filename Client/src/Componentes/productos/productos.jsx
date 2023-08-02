import cocacola from '../../assets/productos/Coca-Cola-PNG-Photos.png'
import papa from '../../assets/productos/papa-tortilla-cubo-e1682068141538.png'
import jamon from '../../assets/productos/Ham-PNG-Free-File-Download.png'
import jabon from '../../assets/productos/jabon.png'
import Pasta from '../../assets/productos/Pasta.png'
import shampoo from '../../assets/productos/shampoo.png'
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