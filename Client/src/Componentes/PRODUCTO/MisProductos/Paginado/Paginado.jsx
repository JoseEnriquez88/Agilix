import React from "react";
import styles from './Paginado.module.css'

const Paginado = ({ productosPorPagina, products, paginado, currentPage }) => {
    const pageNumbers = []
    const totalPages = Math.ceil(products.length / productosPorPagina)
    const maxPagesView = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesView / 2))
    let endPage = Math.min(totalPages, startPage + maxPagesView - 1)
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i)
    };

    const previusPage = () => {
        if (currentPage > 1) {
            paginado(currentPage - 1);
        }
    };
    
    const nextPage = () => {
        const totalPages = Math.ceil(products.length / productosPorPagina);
        if (currentPage < totalPages) {
            paginado(currentPage + 1);
        }
    };

    // First Page
    const handleFirstPage = () => {
        if (currentPage !== 1) paginado(1)
    }

    // Last Page
    const handleLastPage = () => {
        if (currentPage !== totalPages) paginado(totalPages)
    }

    return (
        <div className={styles.PaginationContainer}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <button disabled={currentPage === 1} onClick={handleFirstPage} className={styles.PaginationButton}>start</button>
                </li>
                <li className={styles.li}>
                    <button disabled={currentPage === 1} onClick={previusPage} className={styles.PaginationButton}>Prev</button>
                </li>
                {pageNumbers?.map(number => (
                    <li key={number} className={styles.li}>
                        <button onClick={() => paginado(number)} className={styles.PaginationButton}>{number}</button>
                    </li >
                ))}
                <li className={styles.li}>
                    <button disabled={currentPage === totalPages} onClick={nextPage} className={styles.PaginationButton}>Next</button>
                </li>
                <li className={styles.li}>
                    <button disabled={currentPage === totalPages} onClick={handleLastPage} className={styles.PaginationButton}>end</button>
                </li>
            </ul>
        </div>
    )
}

export default Paginado;