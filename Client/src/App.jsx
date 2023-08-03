import "./App.css";
import Productos from "./Componentes/productos/productos";
import { Sidebar } from "./Componentes/sideBar/sideBar.jsx";

function App() {
  return (
    <div>
      <Sidebar />
      <Productos />
    </div>
  );
}

export default App;
