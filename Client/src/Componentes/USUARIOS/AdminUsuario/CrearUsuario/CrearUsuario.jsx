import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from "./CrearUsuario.module.css";

const CrearUsuario = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    dni: "",
    contraseña: "",
    rol: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/usuarios", input);

      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className={styles.tittle}>Creación de usuarios</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <p className={styles.title}>Crear Usuario</p>
          <label className={styles.nombre} htmlFor="nombre">
            Nombre :{" "}
          </label>
          <input
            className={styles.inputGroup}
            type="text"
            id="nombre"
            name="nombre"
            value={input.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.telefono} htmlFor="apellido">
            Apellido :{" "}
          </label>
          <input
            className={styles.inputGroup}
            type="text"
            id="apellido"
            name="apellido"
            value={input.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.telefono} htmlFor="contraseña">
            Contraseña :{" "}
          </label>
          <input
            className={styles.inputGroup}
            type="password"
            id="contraseña"
            name="contraseña"
            value={input.contraseña}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className={styles.telefono} htmlFor="telefono">
            Teléfono :{" "}
          </label>
          <input
            className={styles.inputGroup}
            type="text"
            id="telefono"
            name="telefono"
            value={input.telefono}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className={styles.email} htmlFor="email">
            Email :{" "}
          </label>
          <input
            className={styles.inputGroup}
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <div>
            <label className={styles.telefono} htmlFor="dni">
              DNI :{" "}
            </label>
            <input
              className={styles.inputGroup}
              type="text"
              id="dni"
              name="dni"
              value={input.dni}
              onChange={handleChange}
            />
          </div>
          <select
            name="rol"
            className={styles.select}
            value={input.rol}
            onChange={handleChange}
          >
            <option value="" disabled>
              Elija un rol
            </option>
            <option value="administrador">Administrador</option>
            <option value="cajero">Cajero</option>
          </select>
        </div>
        <button className={styles.buttonCreate} type="submit">
          Crear Usuario
        </button>
        <br />
        <button className={styles.volverClientes}>
          <NavLink to="/admin" style={{ textDecoration: "none" }}>
            Volver a usuarios
          </NavLink>
        </button>
        {showSuccessMessage && (
          <div className={styles.msjCreado}>¡Usuario creado exitosamente!</div>
        )}
      </form>
    </div>
  );
};

export default CrearUsuario;
