import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getClientsByName,
    getClientByEmail,
    getClientById,
} from "../../../Redux/clientesSlice";
import style from './searchbar.module.css';


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
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
            <button onClick={handleSearch} disabled={loading}>
                Buscar
            </button>
        </div>
    );
}
export default SearchBar; 