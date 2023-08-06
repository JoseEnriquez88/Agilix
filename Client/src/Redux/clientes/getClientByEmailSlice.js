import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/clientes?email=";

const initialState = {
    loading: false,
    clientByEmail: {},
    error: "",
};

export const getClientByEmail = (email) => {
    return async (dispatch) => {
        dispatch(getClientByEmailPending())
        try {
            const { data } = await axios(`${URL}${email}`)
            dispatch(getClientByEmailFulfilled(data))
        } catch (error) {
            dispatch(getClientByEmailRejected(error.response.data.error))
        }
    }
}

const getClientByEmailSlice = createSlice({
    name: "ClientByEmail",
    initialState,
    reducers:{
        getClientByEmailPending: (state) => {
            state.loading = true;
        },
        getClientByEmailFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.clientByEmail = payload;
            state.error = "";
        },
        getClientByEmailRejected: (state, {payload}) =>{
            state.loading = false;
            state.clientByEmail = [];
            state.error = payload;
        }
    }
})

export const {getClientByEmailPending, getClientByEmailFulfilled, getClientByEmailRejected} = getClientByEmailSlice.actions;
export default getClientByEmailSlice.reducer;