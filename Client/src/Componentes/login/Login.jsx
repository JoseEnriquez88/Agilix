import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Bienvenidos a <span className={styles.AgilixTittle}> Agilix</span>
      </h1>
      <div className={styles.form_container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Iniciar sesión</h2>
          <input type="text" className={styles.input} placeholder="Email" />
          <input
            type="text"
            className={styles.input}
            placeholder="Contraseña"
          />
          <button className={styles.btn}>Iniciar sesión</button>
          <p className={styles.text}>O</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <span>Registrarse con Google</span>
          </button>
          <p className={styles.text}>
            ¿Primera vez? <Link to="/signup">Registrate</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
