import { configureStore } from '@reduxjs/toolkit';
import productoCreado from './crearProductoSlice';
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    productoCreado: productoCreado,
    product: productReducer,
  },
});

export default store;

