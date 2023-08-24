import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserByEmail, tipoLogin } from "../../Redux/usuariosSlice";
import axios from "axios";
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    contraseña: "",
  });
  const loginStorage = useSelector((state) => state.usuarios.loginStorage);
  // const { allUsuarios, loginStorage }=useSelector ((state)=>state.usuarios);
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
  const handleLogin = async() => {
    const URL="http://localhost:3001/usuarios"
    try {
      const response = await axios(`${URL}?email=${user.email}`);
  
      const usuariosito = response.data;
  
      if (user.email === usuariosito.email && user.contraseña === usuariosito.contraseña) {
        dispatch(
          tipoLogin({
            login: "local",
            usuario: usuariosito,
          })
          
        );
        console.log("EL LOGIN",loginStorage)
        navigate("/general");
      } else {
        setError("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError("Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.");
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
            name="contraseña"
            value={user.contraseña}
            onChange={handleChange}
          />
          <button className={styles.btn}onClick={handleLogin}>Iniciar sesión</button>
          <p className={styles.text}>O</p>

          <button className={styles.google_btn} onClick={googleAuth}>
            <span className={styles.svg}>
          <GoogleIcon/>
          </span>
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

