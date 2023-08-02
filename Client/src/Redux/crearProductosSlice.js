import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    nombre: '',
    precio: '',
    img: ''
};

export const crearProductoSlice = createSlice({
    name: 'crearProducto',
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
        }
    }
})