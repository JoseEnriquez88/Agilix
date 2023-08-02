import { configureStore } from "@reduxjs/toolkit";
import { crearProductoSlice } from './crearProductosSlice';

export const store = configureStore({
  reducer: {
    crearProducto: crearProductoSlice,
  },
});