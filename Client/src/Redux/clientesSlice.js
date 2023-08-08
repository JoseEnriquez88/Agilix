import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/clientes";

const initialState = {
    loading: false,
    allClientes: [],
    error: "",
  };

export const fetchClientes = createAsyncThunk("clientes/fetchClientes", () => {
  return axios.get(URL).then((response) => response.data);
});

  const clienteSlice = createSlice ({
    name: "clientes",
    initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchClientes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchClientes.fulfilled, (state, action) => {
      state.loading = false;
      state.allClientes = action.payload;
      state.error = "";
    });
    builder.addCase(fetchClientes.rejected, (state, action) => {
      state.loading = false;
      state.allClientes = action.payload;
      state.error = action.error.message;
    });
  },
});


export default clienteSlice.reducer;