import React from "react";
import styles from "./Logged.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tipoLogin } from "../../../Redux/usuariosSlice";

export const Logged = (userDetails) => {
  const loginStorage= useSelector((state)=>state.usuarios.loginStorage);
  const dispatch = useDispatch();
  const {usuario}=loginStorage;
  const user = userDetails.user? userDetails.user : usuario;
  return (
    <div className={styles.card}>
      <div className={styles.img}>{user.name?user.name[0]:usuario.nombre[0]}</div>
      <div className={styles.textContent}>
        <div className={styles.textBox}>
          <p className={styles.h1}>{user.name?user.name:usuario.nombre}</p>
        </div>
        <p className={styles.p}>Sesion iniciada</p>

        <NavLink className={styles.NavLink} to="/login">
          <LogoutIcon className={styles.logout} />
        </NavLink>
      </div>
    </div>
  );
};
export default Logged;
