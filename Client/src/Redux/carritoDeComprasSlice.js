// Importar la función createSlice desde Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Crear el slice del carrito de compras
const carritoDeComprasSlice = createSlice({
  // Nombre del slice
  name: 'carrito',

  // Estado inicial del carrito (un arreglo vacío)
  initialState: [],

  // Definición de las acciones y sus funciones reductoras
  reducers: {
    // Acción para agregar un producto al carrito
    agregarAlCarrito: (state, action) => {
      // Obtener el nuevo producto desde el payload de la acción
      const nuevoProducto = action.payload;

      // Agregar el nuevo producto al estado actual del carrito
      state.push(nuevoProducto);
    },

    // Acción para quitar un producto del carrito
    quitarDelCarrito: (state, action) => {
      // Obtener el ID del producto a quitar desde el payload de la acción
      const idProducto = action.payload;

      // Filtrar los productos y devolver un nuevo estado sin el producto correspondiente al ID
      return state.filter(producto => producto.id !== idProducto);
    },

    // Acción para vaciar completamente el carrito
    vaciarCarrito: () => {
      // Devolver un nuevo estado con un arreglo vacío (carrito vacío)
      return [];
    },
  },
});

// Exportar las acciones creadas por el slice (agregarAlCarrito, quitarDelCarrito, vaciarCarrito)
export const { agregarAlCarrito, quitarDelCarrito, vaciarCarrito } = carritoDeComprasSlice.actions;

// Exportar el reducer del slice (será combinado con otros reducers en la configuración de Redux)
export default carritoDeComprasSlice.reducer;