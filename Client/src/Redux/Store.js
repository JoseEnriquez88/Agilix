import { configureStore } from "@reduxjs/toolkit";
import { crearProductoSlice } from './crearProductosSlice';
import productReducer from "./productosSlice";

export const store = configureStore({
 
  reducer: {
    crearProducto: crearProductoSlice,
    product: productReducer,
  },
});
export default store;
