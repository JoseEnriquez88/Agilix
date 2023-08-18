import { createSlice } from '@reduxjs/toolkit';


const carritoDeComprasSlice = createSlice({

  name: 'carrito',
  initialState: [],
  reducers: {
    agregarAlCarrito: (state, action) => {
      const { producto, cantidad } = action.payload;
      const existingProduct = state.find(item => item.producto.id === producto.id);
      
      if (existingProduct) {
        existingProduct.cantidad += cantidad;
      } else {
        state.push({ producto, cantidad });
      }
    },
    quitarDelCarrito: (state, action) => {
      const idProducto = action.payload;
      return state.filter(item => item.producto.id !== idProducto);
    },
    vaciarCarrito: () => {
      return [];
    },
  }
});

export const { agregarAlCarrito, quitarDelCarrito, vaciarCarrito } = carritoDeComprasSlice.actions;
export default carritoDeComprasSlice.reducer;