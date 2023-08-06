import axios from "axios";
import { getAllClients } from "./getAllClientsSlice";

const URL = "http://localhost:3001/clientes/";

export const putClient = (id, usuario) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.put(`${URL}${id}`, usuario);
            alert(data);
            dispatch(getAllClients());
        } catch (error) {
            alert(error.message);
        }
    }
}