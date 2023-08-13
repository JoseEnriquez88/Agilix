import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import clienteReducer from "./clientesSlice";
import usuarioReducer from "./usuariosSlice";
import ventasSlice from "./ventasSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    clientes: clienteReducer,
    usuarios: usuarioReducer,
    ventas: ventasSlice
  },
});

export default store;
