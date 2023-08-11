import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getClientsByName,
  getClientByEmail,
  getClientById,
} from "../../../Redux/clientesSlice";
import styles from "../SearchBar/searchbar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.clientes.loading);

  const handleSearch = () => {
    if (!isNaN(searchValue)) {
      dispatch(getClientById(searchValue));
    } else if (searchValue.includes("@") && searchValue.includes(".")) {
      dispatch(getClientByEmail(searchValue));
    } else {
      dispatch(getClientsByName(searchValue));
    }
  };

  return (
    <div className={styles.Search}>
      <div className={styles.searchBox}>
        <input
          className={styles.input}
          placeholder=" Buscar..."
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button
          className={styles.button}
          onClick={handleSearch}
          disabled={loading}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
