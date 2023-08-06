import axios from "axios";
import { getAllUsers } from "./getAllUsersSlice";

const URL = "http://localhost:3001/usuarios/";

export const deleteUser = (nombre) => {
    return async (dispatch) => {
        try {
             await axios.put(`${URL}${nombre}`)
            alert("Se borró con éxito")
            dispatch(getAllUsers());
        } catch (error) {
            alert(error.message)
        }
    }
}