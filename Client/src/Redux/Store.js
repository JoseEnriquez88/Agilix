import { configureStore } from '@reduxjs/toolkit';
import productoCreado from './crearProductoSlice';

const store = configureStore({
  reducer: {
    productoCreado: productoCreado,
  },
});

export default store;