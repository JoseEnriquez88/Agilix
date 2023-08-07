import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from './Componentes/Sidebar/sideBar.jsx';
import {
  Cuentas,
  Actualizaciones,
  Ordenes,
  Configuracion,
} from "./Componentes/CUENTAUSUARIO/exportador";
import {
  AñadirProducto,
  Inventario,
  MisProductos,
} from "./Componentes/PRODUCTO/exportador";
import { AdminUsuario, ConfigPerfil } from "./Componentes/USUARIOS/exportador";

import General from "./Componentes/Views/General/Componente_General/General";
import Clientes from "./Componentes/Views/Clientes/Clientes";
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
        <Route path="/actualizaciones" element={<Actualizaciones />} />
        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/configuracion" element={<Configuracion />} />
        <Route path="/añadirProducto" element={<AñadirProducto />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/misProductos" element={<MisProductos />} />
        <Route path="/admin" element={<AdminUsuario />} />
        <Route path="/configPerfil" element={<ConfigPerfil />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cuenta" element={<Cuenta />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/reporte" element={<Reporte />} />
      </Routes>
    </div>
  );
}

export default App;
