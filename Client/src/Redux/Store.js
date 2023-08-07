import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import allUsersReducer from './usuarios/getAllUsersSlice';
import usersByNameReducer from './usuarios/getUsersByNameSlice';
import userByEmailReducer from './usuarios/getUserByEmailSlice';
import userByIdReducer from './usuarios/getUserByIdSlice';

const store = configureStore({
  reducer: {
    product: productReducer,
    allUsers : allUsersReducer,
    usersByName : usersByNameReducer,
    userByEmail : userByEmailReducer,
    userById: userByIdReducer,
  },
});

export default store;
