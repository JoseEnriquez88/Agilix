import React from "react";
import styles from "./Logged.module.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const Logged = (userDetails) => {
  const user = userDetails.user;
  const { logout } = useAuth0();
  return (
    <div className={styles.card}>
      <div className={styles.img}>{user.name.charAt(0)}</div>
      <div className={styles.textContent}>
        <div className={styles.textBox}>
          <p className={styles.h1}>{user.name}</p>
        </div>
        <p className={styles.p}>Sesion iniciada</p>

        <button
          className={styles.NavLink}
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          <LogoutIcon className={styles.logout} />
        </button>
      </div>
    </div>
  );
};
export default Logged;
