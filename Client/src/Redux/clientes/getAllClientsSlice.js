import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/clientes";

const initialState = {
    loading: false,
    allClients: [],
    error: "",
  };

  export const getAllClients = ()=>{
    return async (dispatch) => {
        dispatch (getAllClientsPending())
        try {
            const {data} = await axios(URL)
            dispatch(getAllClientsFulfilled(data))
        } catch (error) {
            dispatch(getAllClientsRejected(error.response.data.error))
        }
    }
}

const getAllClientsSlice = createSlice({
    name: "allClients",
    initialState,
    reducers:{
        getAllClientsPending: (state) => {
            state.loading = true;
        },
        getAllClientsFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.allClients = payload;
        },
        getAllClientsRejected: (state, {payload}) =>{
            state.loading = false;
            state.error = payload;
        }
    }
})

export default getAllClientsSlice.reducer;
export const {getAllClientsPending, getAllClientsFulfilled, getAllClientsRejected} = getAllClientsSlice.actions;
