import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postClient } from '../../../Redux/clientes/postClientSlice';

const TestComponentPostClient = () => {
  const dispatch = useDispatch();
  const [cliente, setCliente] = useState({
    nombre: "",
    telefono: "",
    email: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value
    }));
  };

  const handleTestClick = () => {
    dispatch(postClient(cliente));
  };

  return (
    <div style={{ color: "white" }}>
      <h2>Prueba postClient</h2>
      <label>
        Nombre:
        <input type="text" name="nombre" value={cliente.nombre} onChange={handleInputChange} />
      </label>
      <label>
        Teléfono:
        <input type="text" name="telefono" value={cliente.telefono} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={cliente.email} onChange={handleInputChange} />
      </label>
      <button onClick={handleTestClick}>Crear Cliente</button>
    </div>
  );
};

export default TestComponentPostClient;