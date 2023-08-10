import styles from './ConfigPerfil.module.css';

const ConfigPerfil = () => {
    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorSecundario} >
                <div className={styles.contenedorPerfil}>
                    <h1>Hola</h1>
                </div>
                <div className={styles.contenedorConfigPerfil}>
                    <h1>Hola2</h1>
                </div>
            </div>
        </div>
    )
}

export default ConfigPerfil;