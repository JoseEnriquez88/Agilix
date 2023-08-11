import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import clienteReducer from "./clientesSlice";
import usuarioReducer from "./usuariosSlice";
import carritoDeComprasReducer from './carritoDeComprasSlice';


const store = configureStore({
  reducer: {
    product: productReducer,
    clientes: clienteReducer,
    usuarios: usuarioReducer,
    carrito: carritoDeComprasReducer,
  },
});

export default store;
