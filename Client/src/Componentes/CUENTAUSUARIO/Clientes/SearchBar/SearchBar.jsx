import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { buscarCliente, restablecerClientes } from "../../../../Redux/clientesSlice"
import SearchIcon from '@mui/icons-material/Search';
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    const value = event.target.value;
    setSearch(value);
  }

  const submitHandler = () => {
    const searchString = String(search);
    dispatch(restablecerClientes());
    dispatch(buscarCliente(searchString));
  }

  return (
    <div className={styles.ContenedorSearchBar}>
      <input placeholder="  Buscar un cliente..." type="search" className={styles.SearchBarInput} onChange={searchHandler}/>
      <button type="submit" className={styles.SearchBarButton} onClick={submitHandler}><SearchIcon/></button>
    </div>
  );
};

export default SearchBar;
