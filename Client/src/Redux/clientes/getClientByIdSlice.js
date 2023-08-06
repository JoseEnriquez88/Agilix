import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/clientes/";

const initialState = {
    loading: false,
    clientById: {},
    error: "",
};

export const getClientById = (id) => {
    return async (dispatch) => {
        dispatch(getClientByIdPending())
        try {
            const { data } = await axios(`${URL}${id}`)
            dispatch(getClientByIdFulfilled(data))
        } catch (error) {
            dispatch(getClientByIdRejected(error.response.data.error))
        }
    }
}

const getClientByIdSlice = createSlice({
    name: "ClientById",
    initialState,
    reducers:{
        getClientByIdPending: (state) => {
            state.loading = true;
        },
        getClientByIdFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.clientById = payload;
            state.error = "";
        },
        getClientByIdRejected: (state, {payload}) =>{
            state.loading = false;
            state.clientById = {};
            state.error = payload;
        }
    }
})

export const {getClientByIdPending, getClientByIdFulfilled, getClientByIdRejected} = getClientByIdSlice.actions;
export default getClientByIdSlice.reducer;