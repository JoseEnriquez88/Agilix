import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/productos";

const initialState = {
  loading: false,
  allProducts: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios.get(URL).then((response) => response.data);
});

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
