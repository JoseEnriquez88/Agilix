import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Sidebar } from './Componentes/Sidebar/Sidebar.jsx';
import { Cuentas, Actualizaciones, Ordenes, Configuracion } from './Componentes/CUENTAUSUARIO/exportador';
import { AñadirProducto, Inventario, MisProductos } from './Componentes/PRODUCTO/exportador';
import { AdminUsuario, ConfigPerfil } from './Componentes/USUARIOS/exportador';

import Productos from './Componentes/productos/productos'; //joan
import CrearProducto  from './Componentes/FormCrearProducto/CrearProducto';
import General from './Componentes/Views/General/Componente_General/General';
import Clientes from './Componentes/Views/Clientes/Clientes';
import Cuenta from './Componentes/Views/Cuenta/Cuenta';
import Pagos from './Componentes/Views/Pagos/Pagos';

function App() {
  return (

    <div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<General/>} />  
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

        <Route path='/clientes' element={<Clientes/>}/>
        <Route path='/cuenta' element={<Cuenta/>}/>
        <Route path='/pagos' element={<Pagos/>}/>
      </Routes>
    </div>

  )
}

export default App;
