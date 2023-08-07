import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import clienteReducer from "./clientesSlice";
import usuarioReducer from "./usuariosSlice"

const store = configureStore({
  reducer: {
    product: productReducer,
    clientes: clienteReducer,
    usuarios: usuarioReducer
  },
});

export default store;
