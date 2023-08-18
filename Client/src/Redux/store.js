import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import clienteReducer from "./clientesSlice";
import usuarioReducer from "./usuariosSlice";
import ventasSlice from "./ventasSlice";
import carritoDeComprasReducer from './carritoDeComprasSlice';


const store = configureStore({
  reducer: {
    product: productReducer,
    clientes: clienteReducer,
    usuarios: usuarioReducer,
    ventas: ventasSlice,
    carrito: carritoDeComprasReducer
  },
});

export default store;
