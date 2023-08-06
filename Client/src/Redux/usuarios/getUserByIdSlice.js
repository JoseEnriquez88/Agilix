import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/usuarios/";

const initialState = {
    loading: false,
    userById: {},
    error: "",
};

export const getUserById = (id) => {
    return async (dispatch) => {
        dispatch(getUserByIdPending())
        try {
            const { data } = await axios(`${URL}${id}`)
            dispatch(getUserByIdFulfilled(data))
        } catch (error) {
            dispatch(getUserByIdRejected(error.response.data.error))
        }
    }
}

const getUserByIdSlice = createSlice({
    name: "userById",
    initialState,
    reducers:{
        getUserByIdPending: (state) => {
            state.loading = true;
        },
        getUserByIdFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.userById = payload;
            state.error = "";
        },
        getUserByIdRejected: (state, {payload}) =>{
            state.loading = false;
            state.userById = {};
            state.error = payload;
        }
    }
})

export const {getUserByIdPending, getUserByIdFulfilled, getUserByIdRejected} = getUserByIdSlice.actions;
export default getUserByIdSlice.reducer;