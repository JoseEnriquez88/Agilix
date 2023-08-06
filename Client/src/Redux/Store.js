import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import allUsersReducer from './usuarios/getAllUsersSlice';
import usersByNameReducer from './usuarios/getUsersByNameSlice';
import userByEmailReducer from './usuarios/getUserByEmailSlice';
import userByIdReducer from './usuarios/getUserByIdSlice';
import allClientsReducer from './clientes/getAllClientsSlice';
import clientsByNameReducer from './clientes/getClientsByNameSlice';
import clientByEmailReducer from './clientes/getClientByEmailSlice';
import clientByIdReducer from './clientes/getClientByIdSlice';


const store = configureStore({
  reducer: {
    product: productReducer,
    allUsers : allUsersReducer,
    usersByName : usersByNameReducer,
    userByEmail : userByEmailReducer,
    userById: userByIdReducer,
    allClients: allClientsReducer,
    clientsByName: clientsByNameReducer,
    clientByEmail: clientByEmailReducer,
    clientById: clientByIdReducer
  },
});

export default store;
