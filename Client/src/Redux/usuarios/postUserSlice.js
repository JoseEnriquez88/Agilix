import axios from "axios";
import { getAllUsers } from "./getAllUsersSlice";

const URL = "http://localhost:3001/usuarios";

export const postUser = (usuario) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(URL, usuario)
            alert(data.message)
            dispatch(getAllUsers());  //después de crear el usuario quiero que se actualicen los usuarios
        } catch (error) {
            alert(error.response.data.error); //entro al response que da axios luego a su data.error
        }
    }
}