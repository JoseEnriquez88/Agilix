import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/usuarios";

const initialState = {
  loading: false,
  allUsuarios: [],
  error: "",
};

export const fetchUsuarios = createAsyncThunk("usuarios/fetchUsuarios", () => {
  return axios.get(URL).then((response) => response.data);
});

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsuarios.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsuarios.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsuarios = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsuarios.rejected, (state, action) => {
      state.loading = false;
      state.allUsuarios = [];
      state.error = action.error.message;
    });
  },
});

export default usuariosSlice.reducer;
