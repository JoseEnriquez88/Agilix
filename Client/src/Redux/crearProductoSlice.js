import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = 'http://localhost:3001/producto';


export const crearProducto = createAsyncThunk(
  'producto/crear',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  nombre: '',
  precio: '',
  img: null,
};

const crearProductoSlice = createSlice({
  name: 'productoCreado',
  initialState,
  reducers: {
    setNombre: (state, action) => {
      state.nombre = action.payload;
    },
    setPrecio: (state, action) => {
      state.precio = action.payload;
    },
    setImg: (state, action) => {
      state.img = action.payload;
    },
  },
});

export const { setNombre, setPrecio, setImg } = crearProductoSlice.actions;
export default crearProductoSlice.reducer;