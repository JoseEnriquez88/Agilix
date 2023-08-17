import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/ventas";

const initialState = {
  loading: false,
  allVentas: [],
  ventaById: {},
  error: "",
};

export const fetchVentas = createAsyncThunk("ventas/fetchVentas", () => {
  return axios.get(URL).then((response) => response.data);
});

export const getVentaById = createAsyncThunk("ventas/getVentaById", async (id) => {
  const { data } = await axios(`${URL}/${id}`)
  return data;
});

export const postVenta = createAsyncThunk("ventas/postVenta", async (usuario, { dispatch }) => {
    try {
        const { data } = await axios.post(URL, usuario);
        alert(data.message);
    } catch (error) {
        alert(error.response.data.error);
    }
});

export const putVenta = createAsyncThunk('ventas/putVenta', async ( {id, usuario}, { dispatch }) => {
  try {  //id y usuario deben ser pasados en forma de objeto
    const { data } = await axios.put(`${URL}/${id}`, usuario);
    alert(data);
    dispatch(fetchVentas());
  } catch (error) {
    alert(error.message);
  }
});

const ventasSlice = createSlice({
  name: "ventas",
  initialState,
  extraReducers: (builder) => {
      builder.addCase(fetchVentas.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(fetchVentas.fulfilled, (state, action) => {
        state.loading = false;
        state.allVentas = action.payload;
        state.error = "";
      })
      builder.addCase(fetchVentas.rejected, (state, action) => {
        state.loading = false;
        state.allVentas = [];
        state.error = action.error.message;
      })
      builder.addCase(getVentaById.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(getVentaById.fulfilled, (state, action) => {
        state.loading = false;
        state.ventaById = action.payload;
        state.error = "";
      })
      builder.addCase(getVentaById.rejected, (state, action) => {
        state.loading = false;
        state.ventaById = {};
        state.error = action.error.message;
      })
  },
});

export default ventasSlice.reducer;