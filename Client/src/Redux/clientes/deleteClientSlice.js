import axios from "axios";
import { getAllClients } from "./getAllClientsSlice";

const URL = "http://localhost:3001/clientes/";

export const deleteClient = (nombre) => {
    return async (dispatch) => {
        try {
             const {data} = await axios.put(`${URL}${nombre}`)
            alert(data.message)
            dispatch(getAllClients());
        } catch (error) {
            alert(error.response.data.error)
        }
    }
}