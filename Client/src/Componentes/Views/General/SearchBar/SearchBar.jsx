import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={styles.ContenedorSearchBar}>
            <input type='text' className={styles.SearchBarInput}/>
            <button type='submit' className={styles.SearchBarButton}>Q</button>
        </div>
    )
}

export default SearchBar;