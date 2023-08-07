import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/productos";

const initialState = {
  loading: false,
  allProducts: [],
  productosFiltrados: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(URL);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //Ordenamiento alfabético
    ordenAlfabetico: (state, action) => {
      let productos = [...state.productosFiltrados];
      if (action.payload === "asc") {
        productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else if (action.payload === "desc") {
        productos.sort((a, b) => b.nombre.localeCompare(a.nombre));
      }
      state.productosFiltrados = productos;
    },
    //Ordenamiento por precio
    ordenPorPrecio: (state, action) => {
      let productos = [...state.productosFiltrados];
      if (action.payload === "precioMin") {
        productos.sort((a, b) => a.precio - b.precio);
      } else if (action.payload === "precioMax") {
        productos.sort((a, b) => b.precio - a.precio);
      }
      state.productosFiltrados = productos;
    },
    //Restablecer ordenamientos
    restablecerOrdenamientos: (state) => {
      state.productosFiltrados = state.allProducts;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      // para que el estado copia se inicialize con el mismo valor que el estado original
      state.productosFiltrados = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      //state.allProducts = action.payload;
      // para que el estado copia se inicialize con el mismo valor que el estado original
      //state.productosFiltrados = action.payload;
      state.error = action.payload.error;
    });
  },
});

export default productSlice.reducer;
export const { ordenAlfabetico, ordenPorPrecio, restablecerOrdenamientos } =
  productSlice.actions;
