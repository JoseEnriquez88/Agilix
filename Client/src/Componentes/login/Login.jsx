import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserByEmail, tipoLogin } from "../../Redux/usuariosSlice";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { allUsuarios, loginStorage }=useSelector ((state)=>state.usuarios);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleLogin = () => {
    dispatch(getUserByEmail(user.email));
    console.log("ANTES DEL IF",allUsuarios);
    
    if (user.email === allUsuarios[0].email && user.contraseña === allUsuarios[0].contraseña) {
      console.log("DESPUES DEL IF",allUsuarios);
        dispatch(tipoLogin({
          login:"local",
          usuario:allUsuarios[0]
        }));
        console.log("EL LOGIN STORAGE ",loginStorage);

        window.location.href = 'http://localhost:5173/general';
    } else {
      setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Bienvenidos a <span className={styles.AgilixTittle}> Agilix</span>
      </h1>
      {error && <p className="error">{error}</p>}
      <div className={styles.form_container}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Iniciar sesión</h2>
          <input 
            type="text" 
            className={styles.input}
            placeholder="Email" 
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Contraseña"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button className={styles.btn}onClick={handleLogin}>Iniciar sesión</button>
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
