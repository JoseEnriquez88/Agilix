import './App.css';
import  CrearProducto  from './Componentes/FormCrearProducto/CrearProducto';
import Productos from './Componentes/productos/productos';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Componentes/Sidebar/Sidebar.jsx';
import { General, Cuentas, Actualizaciones, Ordenes, Configuracion } from './Componentes/CUENTAUSUARIO/exportador';
import { AdminUsuario, ConfigPerfil } from './Componentes/USUARIOS/exportador';

function App() {
  return (

    <div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<General />} />  
        <Route path='/cuentas' element={<Cuentas />} />
        <Route path='/actualizaciones' element={<Actualizaciones />} />
        <Route path='/ordenes' element={<Ordenes />} />
        <Route path='/configuracion' element={<Configuracion />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/admin' element={<AdminUsuario />} />
        <Route path='/configPerfil' element={<ConfigPerfil />} />
      </Routes>
    </div>

  )
}

export default App;
