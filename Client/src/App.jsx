import './App.css';
// import Productos from './Componentes/productos/productos';
import { Sidebar } from  './Componentes/sideBar/sideBar.jsx';
import  CrearProducto  from './Componentes/FormCrearProducto/CrearProducto';


function App() {

  return (
      <div>
        {/* <Productos /> */}
        <Sidebar />
        <CrearProducto />
      </div>
  )
}

export default App
