import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsuarios } from "../../../Redux/usuariosSlice";
import { NavLink } from "react-router-dom";
import styles from "./AdminUsuario.module.css";

const AdminUsuarios = () => {
  const dispatch = useDispatch();
  const usuarios = useSelector((state) => state.usuarios);

  useEffect(() => {
    dispatch(fetchUsuarios());
  }, [dispatch]);

  if (!usuarios.allUsuarios.length) {
    return (
      <div className={styles.buttonContainer}>
        <button className={styles.CrearCliente}>
          <NavLink to="/crearusuario" style={{ textDecoration: "none" }}>
            Crear Usuario
          </NavLink>
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className={styles.tittle}>Lista de usuarios</h1>
      <div className={styles.container}>
        <button className={styles.CrearCliente}>
          <NavLink to="/crearusuario" style={{ textDecoration: "none" }}>
            Crear Usuario
          </NavLink>
        </button>

        <ol className={styles.clienteList}>
          {usuarios.allUsuarios.map((usuario) => (
            <li className={styles.clienteRow} key={usuario.id}>
              <div className={styles.clienteInfo}>
                <span className={styles.tituloPrincipal}>Nombre:</span>
                <p className={styles.nombreCliente}>
                  {usuario.nombre} {usuario.apellido}
                </p>
              </div>
              <div className={styles.clienteInfo}>
                <span className={styles.tituloPrincipal}>Teléfono:</span>
                <p className={styles.telefonoCliente}>{usuario.telefono}</p>
              </div>
              <div className={styles.clienteInfo}>
                <span className={styles.tituloPrincipal}>Email:</span>
                <p className={styles.clienteEmail}>{usuario.email}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default AdminUsuarios;
