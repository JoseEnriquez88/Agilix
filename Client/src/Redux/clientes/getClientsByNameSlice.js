import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/clientes?nombre=";

const initialState = {
    loading: false,
    clientsByName: [],
    error: "",
};

export const getClientsByName = (nombre) => {
    return async (dispatch) => {
        dispatch(getClientsByNamePending())
        try {
            const { data } = await axios(`${URL}${nombre}`)
            dispatch(getClientsByNameFulfilled(data))
        } catch (error) {
            dispatch(getClientsByNameRejected(error.response.data.error))
        }
    }
}

const getClientsByNameSlice = createSlice({
    name: "clientsByName",
    initialState,
    reducers:{
        getClientsByNamePending: (state) => {
            state.loading = true;
        },
        getClientsByNameFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.clientsByName = payload;
            state.error = "";
        },
        getClientsByNameRejected: (state, {payload}) =>{
            state.loading = false;
            state.clientsByName = [];
            state.error = payload;
        }
    }
})
export const {getClientsByNamePending, getClientsByNameFulfilled, getClientsByNameRejected} = getClientsByNameSlice.actions;
export default getClientsByNameSlice.reducer;