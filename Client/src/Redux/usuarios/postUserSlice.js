import axios from "axios";
import { getAllUsers } from "./getAllUsersSlice";

const URL = "http://localhost:3001/usuarios";

export const postUser = (usuario) => {
    return async (dispatch) => {
        try {
            await axios.post(URL, usuario)
            alert("Se creó con éxito")
            dispatch(getAllUsers());
        } catch (error) {
            alert(error.message)
        }
    }
}