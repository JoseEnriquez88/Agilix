import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../Redux/productSlice";
import styles from "../AñadirProducto/AñadirProducto.module.css";
import axios from "axios";

//Creacion de estado local para envio de data de producto
const InitialCreate = {
  nombre: "",
  precio: "",
  img: "",
  stock: "",
  tipo: "",
};

const AñadirProducto = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); //Estado para mostrar mensaje de confirmacion de creacion
  const [previewImage, setPreviewImage] = useState(""); //Estado para previsualizacion de imagen subida
  const [input, setInput] = useState(InitialCreate); //Estado para almacenamiento de datos en estado local
  const [stock, setStock] = useState(1); // Estado para almacenar el  stock de productos a crear
  const [stockDisponible, setStockDisponible] = useState("");
  const dispatch = useDispatch();

  // Función para manejar el cambio en el campo de stock
  const handleStockChange = (event) => {
    const nuevaStock = parseInt(event.target.value, 10); // Convertir el valor a un número entero en base 10
    if (!isNaN(nuevaStock) && nuevaStock >= 0) {
      setStockDisponible(nuevaStock);
    }
  };

  //Funcion que captura la data de los inputs y la almacena en el estado local
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  //Funcion que maneja subida de imagenes y previsualizacion
  const handleImageChange = (event) => {
    if (event.target.name === "img") {
      setInput({ ...input, [event.target.name]: event.target.files[0] });
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  //Funcion que limpia los datos de imagenes por subir
  const handleRemoveImage = () => {
    const fileInput = document.getElementById("image");
    fileInput.value = "";
    setPreviewImage(""); //
    setInput({ ...input, img: "" });
  };

  //Funcion para boton de creacion de producto
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nombre", input.nombre);
      formData.append("precio", input.precio);
      formData.append("tipo", input.tipo);
      formData.append("stock", stockDisponible); //  la cantidad al FormData
      formData.append("img", input.img);

      const formDataObject = Object.fromEntries(formData);

      const response = await axios.post(`/productos`, formData);

      //Actualiza el estado global
      dispatch(fetchProducts());

      // Mostrar el mensaje de éxito
      setShowSuccessMessage(true);

      // Actualiza la stock disponible
      setStockDisponible(stock);

      setTimeout(() => {
        setShowSuccessMessage(false);
        setInput({
          ...input,
          nombre: "",
          precio: "",
          img: "",
          tipo: "",
        });
        setPreviewImage("");
        setStock(1); // Restablecer la stocka 1 después de la creación
        setStockDisponible(1); // Restablecer la stock disponible
      }, 2000);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const seleccionarTipo = (event) => {
    //esto es para select del tipo de producto
    setInput({
      ...input,
      tipo: event.target.value,
    });
  };

  //FORMULARIO

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <p className={styles.titituloForm}>Crear Productos</p>
        <label className={styles.inputGropLabel} htmlFor="name">
          Nombre :
        </label>
        <input
          className={styles.inputGroup}
          type="text"
          id="name"
          name="nombre"
          value={input.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.inputGropLabel} htmlFor="price">
          Precio :
        </label>
        <input
          className={styles.inputGroup}
          type="text"
          id="price"
          name="precio"
          value={input.precio}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.inputGropLabel} htmlFor="stock">
          Stock :
        </label>
        <input
          className={styles.inputGroup}
          type="number"
          id="stock"
          name="stock"
          value={stockDisponible} // Usa stockDisponible para mostrar
          onChange={handleStockChange}
        />
      </div>
      <div>
        <label className={styles.inputGropLabel}>Tipo :</label>
        <select
          className={styles.inputGroup}
          defaultValue={input.tipo === "" && "escoger"}
          onChange={seleccionarTipo}
        >
          <option disabled={true} value="escoger">
            Escoger Tipo
          </option>
          <option value="frutas">Frutas</option>
          <option value="verduras">Verduras</option>
          <option value="bebidas">Bebidas</option>
          <option value="abarrotes">Abarrotes</option>
          <option value="carnes">Carnes</option>
        </select>
      </div>
      <div>
        <span className={styles.ImagenTittle}>Imagen :</span>
        <br />
        <label className={styles.inputGropLabel} htmlFor="image">
          <br />
          <span className={styles.uploadButton}>Seleccionar archivo</span>
        </label>
        {previewImage && (
          <img
            className={styles.image}
            id="preview"
            src={previewImage}
            alt="Preview"
          />
        )}
        <button
          className={styles.buttonDelete}
          type="button"
          onClick={handleRemoveImage}
        >
          Eliminar imagen
        </button>
        <input
          className={styles.customFileInput}
          type="file"
          id="image"
          name="img"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <button className={styles.buttonCreate} type="submit">
        Crear Producto
      </button>
      {showSuccessMessage && (
        <div className="success-modal">¡Producto creado exitosamente!</div>
      )}
    </form>
  );
};

export default AñadirProducto;
