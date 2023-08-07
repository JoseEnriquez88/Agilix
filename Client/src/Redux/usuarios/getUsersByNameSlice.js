import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/usuarios?nombre=";

const initialState = {
    loading: false,
    usersByName: [],
    error: "",
};

export const getUsersByName = (nombre) => {
    return async (dispatch) => {
        dispatch(getUsersByNamePending())
        try {
            const { data } = await axios(`${URL}${nombre}`)
            dispatch(getUsersByNameFulfilled(data))
        } catch (error) {
            dispatch(getUsersByNameRejected(error.message))
        }
    }
}

const getUsersByNameSlice = createSlice({
    name: "usersByName",
    initialState,
    reducers:{
        getUsersByNamePending: (state) => {
            state.loading = true;
        },
        getUsersByNameFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.usersByName = payload;
            state.error = "";
        },
        getUsersByNameRejected: (state, {payload}) =>{
            state.loading = false;
            state.usersByName = [];
            state.error = payload;
        }
    }
})
export const {getUsersByNamePending, getUsersByNameFulfilled, getUsersByNameRejected} = getUsersByNameSlice.actions;
export default getUsersByNameSlice.reducer;