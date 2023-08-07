import { createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/usuarios";

const initialState = {
    loading: false,
    allUsers: [],
    error: "",
  };

export const getAllUsers = ()=>{   
    return async (dispatch) => {
        dispatch (getAllUsersPending())
        try {
            const {data} = await axios(URL)
            dispatch(getAllUsersFulfilled(data))
        } catch (error) {
            dispatch(getAllUsersRejected(error.message))
        }
    }
}

const getAllUsersSlice = createSlice({
    name: "allUsers",
    initialState,
    reducers:{
        getAllUsersPending: (state) => {
            state.loading = true;
        },
        getAllUsersFulfilled: (state, {payload}) =>{
            state.loading = false;
            state.allUsers = payload;
        },
        getAllUsersRejected: (state, {payload}) =>{
            state.loading = false;
            state.error = payload;
        }
    }
})

export default getAllUsersSlice.reducer;
export const {getAllUsersPending, getAllUsersFulfilled, getAllUsersRejected} = getAllUsersSlice.actions;