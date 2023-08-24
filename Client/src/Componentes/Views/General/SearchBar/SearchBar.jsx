import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { buscarCliente, restablecerClientes } from "../../../../Redux/clientesSlice";
import { buscarProducto, restablecerOrdenamientos } from "../../../../Redux/productSlice";
import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [seleccion, setSeleccion] = useState("cliente");

  const searchHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  }

  const selectHandler = (event) => {
    const value = event.target.value;
    setSeleccion(value);
  }

  const submitHandler = () => {
    const searchString = String(search);
    
    if (seleccion === "cliente") {
      dispatch(restablecerClientes());
      dispatch(buscarCliente(searchString));
      navigate("/clientes")
    } else if (seleccion === "producto") {
      dispatch(restablecerOrdenamientos());
      dispatch(buscarProducto(searchString));
      navigate("/misProductos")
    }
  }

  return (
    <div className={styles.ContenedorSearchBar}>
      <select onChange={selectHandler} className={styles.selectorSearchBar}>
        <option value="cliente">Clientes</option>
        <option value="producto">Productos</option>
      </select>
      <input placeholder="  Buscar algo..." type="search" value={search} className={styles.SearchBarInput} onChange={searchHandler}/>
      <button type="submit" className={styles.SearchBarButton} onClick={submitHandler}><SearchIcon/></button>
    </div>
  );
};
