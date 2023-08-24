import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { buscarProducto, restablecerOrdenamientos } from "../../../../Redux/productSlice";
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
    dispatch(restablecerOrdenamientos());
    dispatch(buscarProducto(searchString));
    setSearch("");
  }

  return (
    <div className={styles.ContenedorSearchBar}>
      <input placeholder="  Buscar un producto..." type="search" value={search} className={styles.SearchBarInput} onChange={searchHandler}/>
      <button type="submit" className={styles.SearchBarButton} onClick={submitHandler}><SearchIcon/></button>
    </div>
  );
};

export default SearchBar;
