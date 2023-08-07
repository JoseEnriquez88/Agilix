import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/usuarios?email=";

const initialState = {
    loading: false,
    userByEmail: {},
    error: "",
};

export const getUserByEmail = (email) => {
    return async (dispatch) => {
        dispatch(getUserByEmailPending())
        try {
            const { data } = await axios(`${URL}${email}`)
            dispatch(getUserByEmailFulfilled(data))
        } catch (error) {
            dispatch(getUserByEmailRejected(error.message))
        }
    }
}

const getUserByEmailSlice = createSlice({
    name: "userByEmail",
    initialState,
    reducers:{
        getUserByEmailPending: (state) => {
            state.loading = true;
        },
        getUserByEmailFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.userByEmail = payload;
            state.error = "";
        },
        getUserByEmailRejected: (state, {payload}) =>{
            state.loading = false;
            state.userByEmail = [];
            state.error = payload;
        }
    }
})

export const {getUserByEmailPending, getUserByEmailFulfilled, getUserByEmailRejected} = getUserByEmailSlice.actions;
export default getUserByEmailSlice.reducer;