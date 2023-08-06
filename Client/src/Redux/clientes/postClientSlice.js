import axios from "axios";
import { getAllClients } from "./getAllClientsSlice";

const URL = "http://localhost:3001/clientes";

export const postClient = (usuario) => {
    return async (dispatch) => {
        try {
           const { data } = await axios.post(URL, usuario)
            alert(data.message)
            dispatch(getAllClients()); //quiero que se actualizen los clientes
        } catch (error) {
            alert(error.response.data.error); //entro al response que da axios luego a su data.error
        }
    }
}