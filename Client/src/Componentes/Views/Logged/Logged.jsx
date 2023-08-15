import React from "react";
import styles from "./Logged.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";

export const Logged = (userDetails) => {
  const user = userDetails.user;
  return (
    <div className={styles.card}>
      <div className={styles.img}>{user.name.charAt(0)}</div>
      <div className={styles.textContent}>
        <div className={styles.textBox}>
          <p className={styles.h1}>{user.name}</p>
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
