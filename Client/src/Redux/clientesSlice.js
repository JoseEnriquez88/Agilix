import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:3001/clientes";

const initialState = {
  loading: false,
  allClientes: [],
  clientById: {},
  clientByDni: {}, //necesario para la creacion de una venta
  error: "",
};

export const fetchClientes = createAsyncThunk("clientes/fetchClientes", () => {
  return axios.get(URL).then((response) => response.data);
});
export const deleteClientes = createAsyncThunk("clientes/putClientes", async({id,estado}) => {
  console.log(estado)
  const{data}= await axios.put(`${URL}/${id}`,{estado})
  return data
});

export const getClientsByName = createAsyncThunk("clientes/getClientsByName",async (nombre) => {
    const {data} = await axios(`${URL}?nombre=${nombre}`);
    return data;
  }
);
export const getClientByEmail = createAsyncThunk("clientes/getClientByEmail", async (email) => {
    const {data} = await axios(`${URL}?email=${email}`);
    return data;
  }
);
export const getClientByDni = createAsyncThunk("clientes/getClientByDni", async (dni) => {
  const { data } = await axios(`${URL}?dni=${dni}`);
  return data;
});
export const getClientById = createAsyncThunk("clientes/getClientById", async(id) => {
          const { data } = await axios(`${URL}/${id}`)
          return data;
})
export const putClient = createAsyncThunk("clientes/putClient", async ({id, cliente}) => {
      try {
          const { data } = await axios.put(`${URL}/${id}`, cliente);
          alert(data);
      } catch (error) {
          alert(error.message);
      }
})

const clienteSlice = createSlice({
  name: "clientes",
  initialState,
  extraReducers: (builder) => {
      builder.addCase(fetchClientes.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(fetchClientes.fulfilled, (state, action) => {
        state.loading = false;
        state.allClientes = action.payload;
        state.error = "";
      })
      builder.addCase(fetchClientes.rejected, (state, action) => {
        state.loading = false;
        state.allClientes = [];
        state.error = action.error.message;
      })
      builder.addCase(getClientsByName.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(getClientsByName.fulfilled, (state, action) => {
        state.loading = false;
        state.allClientes = action.payload;
        state.error = "";
      })
      builder.addCase(getClientsByName.rejected, (state, action) => {
        state.loading = false;
        state.allClientes = [];
        state.error = action.error.message;
      })
      builder.addCase(getClientByEmail.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(getClientByEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.allClientes = [action.payload];
        state.error = "";
      })
      builder.addCase(getClientByEmail.rejected, (state, action) => {
        state.loading = false;
        state.allClientes = [];
        state.error = action.error.message;
      })
      builder.addCase(getClientByDni.pending, (state) => {
        state.loading = true;
    })
    builder.addCase(getClientByDni.fulfilled, (state, action) => {
        state.loading = false;
        state.clientByDni = action.payload;
        state.error = "";
    })
    builder.addCase(getClientByDni.rejected, (state, action) => {
        state.loading = false;
        state.clientByDni = {};
        state.error = action.error.message;
    })
      builder.addCase(getClientById.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(getClientById.fulfilled, (state, action) => {
        state.loading = false;
        state.clientById = action.payload;
        state.error = "";
      })
      builder.addCase(getClientById.rejected, (state, action) => {
        state.loading = false;
        state.clientById = {};
        state.error = action.error.message;
      })
      builder.addCase(deleteClientes.pending, (state) => {
        state.loading = true;
      })
      builder.addCase(deleteClientes.fulfilled, (state) => {
        state.loading = false;
        state.allClientes = state.allClientes.filter(
          (cliente) => cliente.estado !== false
        );
        state.error = "";
      })
      builder.addCase(deleteClientes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export default clienteSlice.reducer;