import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "/usuarios";

const initialState = {
  loading: false,
  allUsuarios: [],
  userById: {},
  loginStorage: {
    loginStorage: {
      login: "", 
      usuario: {}, 
    }
  },
  error: "",
};

export const fetchUsuarios = createAsyncThunk("usuarios/fetchUsuarios", () => {
  return axios.get(URL).then((response) => response.data);
});

export const fetchUsuariosByName = createAsyncThunk(
  "usuarios/fetchUsuariosByName",
  async (nombre) => {
    const response = await axios(`${URL}?nombre=${nombre}`);
    return response.data;
  }
);

export const getUserByEmail = createAsyncThunk(
  "usuarios/getUserByEmail",
  async ({email}) => {
    const response = await axios(`${URL}?email=${email}`);
    return response.data;
  }
);

export const getUserById = createAsyncThunk(
  "usuarios/getUserById",
  async (id) => {
    const { data } = await axios(`${URL}/${id}`);
    return data;
  }
);

export const deleteUser = createAsyncThunk(
  "usuarios/deleteUser",
  async (nombre, { dispatch }) => {
    //el dispatch lo proporciona thunkAPI de createAsyncThunk
    try {
      await axios.put(`${URL}/${nombre}`);
      alert("Se borró con éxito");
      dispatch(fetchUsuarios());
    } catch (error) {
      alert(error.response.data.error);
    }
  }
);

export const putUser = createAsyncThunk(
  "usuarios/putUser",
  async (id, usuario, { dispatch }) => {
    try {
      const { data } = await axios.put(`${URL}/${id}`, usuario);
      alert(data);
      dispatch(fetchUsuarios());
    } catch (error) {
      alert(error.message);
    }
  }
);

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState,
  reducers: {
    tipoLogin: (state, action) => {
      const { login, usuario } = action.payload;
      state.loginStorage = { login, usuario};
      console.log("DESPUES DE EL STATE")
      console.log(state.loginStorage)
    },
  },
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
    builder.addCase(fetchUsuariosByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsuariosByName.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsuarios = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsuariosByName.rejected, (state, action) => {
      state.loading = false;
      state.allUsuarios = [];
      state.error = action.error.message;
    });
    builder.addCase(getUserByEmail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserByEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsuarios = [action.payload];
      state.error = "";
    });
    builder.addCase(getUserByEmail.rejected, (state, action) => {
      state.loading = false;
      state.allUsuarios = [];
      state.error = action.error.message;
    });
    builder.addCase(getUserById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false;
      state.userById = action.payload;
      state.error = "";
    });
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false;
      state.userById = {};
      state.error = action.error.message;
    });
  },
});

export default usuariosSlice.reducer;
export const {
  tipoLogin,
} = usuariosSlice.actions;
