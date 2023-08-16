import styles from "./SearchBar.module.css";
import React from "react";

const SearchBar = () => {
  return (
    <div className={styles.ContenedorSearchBar}>
      <input
        placeholder="  Buscar algo..."
        type="text"
        className={styles.SearchBarInput}
      />
      <button type="submit" className={styles.SearchBarButton}>
        Q
      </button>
    </div>
  );
};

export default SearchBar;
