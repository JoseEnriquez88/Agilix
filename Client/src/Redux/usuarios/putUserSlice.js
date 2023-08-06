import axios from "axios";
import { getAllUsers } from "./getAllUsersSlice";

const URL = "http://localhost:3001/usuarios/";

export const putUser = (id, usuario) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${URL}${id}`, usuario);
            alert(data);
            dispatch(getAllUsers());
        } catch (error) {
            alert(error.message);
        }
    }
}