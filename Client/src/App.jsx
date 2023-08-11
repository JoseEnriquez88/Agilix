import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./Componentes/sideBar/sideBar";
import {
  CrearCliente,
  Cuentas,
  Clientes,
  Configuracion,
} from "./Componentes/CUENTAUSUARIO/exportador";
import {
  AñadirProducto,
  Inventario,
  MisProductos,
} from "./Componentes/PRODUCTO/exportador";
import { AdminUsuario, ConfigPerfil } from "./Componentes/USUARIOS/exportador";
import CrearUsuario from "./Componentes/USUARIOS/AdminUsuario/CrearUsuario/CrearUsuario";

import General from "./Componentes/Views/General/Componente_General/General";
import Cuenta from "./Componentes/Views/Cuenta/Cuenta";
import Pagos from "./Componentes/Views/Pagos/Pagos";
import Reporte from "./Componentes/Views/General/Comparacion_de_ventas/Reporte/Reporte";

import { fetchProducts } from "./Redux/productSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/cuentas" element={<Cuentas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/crearcliente" element={<CrearCliente />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/añadirProducto" element={<AñadirProducto />} />
        <Route path="/crearusuario" element={<CrearUsuario />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/misProductos" element={<MisProductos />} />
        <Route path="/admin" element={<AdminUsuario />} />
        <Route path="/configPerfil" element={<ConfigPerfil />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/reporte" element={<Reporte />} />
      </Routes>
    </div>
  );
}

export default App;
