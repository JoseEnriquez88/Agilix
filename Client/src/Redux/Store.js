import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import clienteReducer from "./clientesSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    clientes: clienteReducer,
    
  },
});

export default store;
