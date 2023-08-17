import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./Componentes/sideBar/sideBar";
import {
  CrearCliente,
  Cuentas,
  Clientes,
  Configuracion,
} from "./Componentes/CUENTAUSUARIO/exportador";
import {
  AñadirProducto,
  Vender,
  MisProductos,
} from "./Componentes/PRODUCTO/exportador";
import { AdminUsuario, ConfigPerfil } from "./Componentes/USUARIOS/exportador";

import General from "./Componentes/Views/General/Componente_General/General";
import Cuenta from "./Componentes/Views/Cuenta/Cuenta";
import Pagos from "./Componentes/Views/Pagos/Pagos";
import Reporte from "./Componentes/Views/General/Comparacion_de_ventas/Reporte/Reporte";
import DetalleDeCompra from "./Componentes/PRODUCTO/Vender/Detalle_De_Compra/Detalle_De_Compra"
import Login from "./Componentes/login/Login";
import Logged from "./Componentes/Views/Logged/Logged";

import { fetchProducts } from "./Redux/productSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? <Sidebar /> : null}
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Navigate to="/general" />} />
            <Route path="/general" element={<General user={user} />} />
            <Route path="/cuentas" element={<Cuentas />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/logged" element={<Logged />} />
            <Route path="/crearcliente" element={<CrearCliente />} />
            <Route path="/configuracion" element={<Configuracion />} />
            <Route path="/añadirProducto" element={<AñadirProducto />} />
            <Route path="/misProductos" element={<MisProductos />} />
            <Route path="/admin" element={<AdminUsuario />} />
            <Route path="/configPerfil" element={<ConfigPerfil />} />
            <Route path="/cuenta" element={<Cuenta />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/reporte" element={<Reporte />} />
            <Route path="/detalle_de_compra" element={<DetalleDeCompra />} />
            <Route path="/vender" element={<Vender />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
