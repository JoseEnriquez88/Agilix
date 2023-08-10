import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styles from "../CrearCliente/CrearCliente.module.css";

const Clientes = () => {
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
        "http://localhost:3001/clientes",
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
        <p className={styles.tittle}>Crear Cliente</p>
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
        Crear Cliente
      </button>
      <button className={styles.volverClientes}>
        <NavLink to="/clientes" style={{ textDecoration: "none" }}>
          Volver a clientes
        </NavLink>
      </button>
      {showSuccessMessage && (
        <div className={styles.msjCreado}>¡Cliente creado exitosamente!</div>
      )}
    </form>
  );
};

export default Clientes;
