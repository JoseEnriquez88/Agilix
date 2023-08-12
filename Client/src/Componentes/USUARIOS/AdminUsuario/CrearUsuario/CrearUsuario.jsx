import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from "./CrearUsuario.module.css";

const CrearUsuario = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [input, setInput] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/usuarios",
        input
      );

      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
      </div>
      <br />
      <button className={styles.buttonCreate} type="submit">
        Crear Usuario
      </button>
      <button className={styles.volverClientes}>
        <NavLink to="/admin" style={{ textDecoration: "none" }}>
          Volver a usuarios
        </NavLink>
      </button>
      {showSuccessMessage && (
        <div className={styles.msjCreado}>¡Usuario creado exitosamente!</div>
      )}
    </form>
  );
};

export default CrearUsuario;
