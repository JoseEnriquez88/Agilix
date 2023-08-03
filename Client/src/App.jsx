import './App.css';

import Productos from './Componentes/productos/productos'; //joan
import  CrearProducto  from './Componentes/FormCrearProducto/CrearProducto';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Componentes/Sidebar/Sidebar.jsx';
import { General, Cuentas, Actualizaciones, Ordenes, Configuracion } from './Componentes/CUENTAUSUARIO/exportador';
import { AñadirProducto, Inventario, MisProductos } from './Componentes/PRODUCTO/exportador';
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
        <Route path='/añadirProducto' element={<AñadirProducto />} />
        <Route path='/inventario' element={<Inventario />} />
        <Route path='/misProductos' element={<MisProductos />} />
        <Route path='/productos' element={<Productos />} />
        {/*acá tienes que reemplazar productos por misProductos*/}
        <Route path='/admin' element={<AdminUsuario />} />
        <Route path='/configPerfil' element={<ConfigPerfil />} />
      </Routes>
    </div>

  )
}

export default App;
