import { useState } from "react";
import styles from "../AñadirProducto/AñadirProducto.module.css";
import axios from "axios";

//Creacion de estado local para envio de data de producto
const InitialCreate = {
  nombre: "",
  precio: "",
  img: "",
};

const AñadirProducto = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); //Estado para mostrar mensaje de confirmacion de creacion
  const [previewImage, setPreviewImage] = useState(""); //Estado para previsualizacion de imagen subida
  const [input, setInput] = useState(InitialCreate); //Estado para almacenamiento de datos en estado local

  //Funcion que captura la data de los inputs y la almacena en el estado local
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  //Funcion que maneja subida de imagenes y previsualizacion
  const handleImageChange = (event) => {
    const imgFile = event.target.files[0];
    setInput({ ...input, [event.target.name]: event.target.value });
    setPreviewImage(URL.createObjectURL(imgFile));
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
      const response = await axios.post(
        `http://localhost:3001/productos`,
        input //Estado local
      );
      // Mostrar el mensaje de éxito
      setShowSuccessMessage(true);

      // Ocultar el mensaje e imagen previsualizada después de un breve tiempo
      setTimeout(() => {
        setShowSuccessMessage(false);
        setInput({
          ...input,
          nombre: "",
          precio: "",
          img: "",
        });
        setPreviewImage("");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  //FORMULARIO

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <p className={styles.titituloForm}>Crear Productos</p>
        <label className={styles.inputGropLabel} htmlFor="name">
          Nombre:{" "}
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
          Precio:{" "}
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
        <label className={styles.inputGropLabel} htmlFor="image">
          Imagen:{" "}
        </label>
        <input
          className={styles.inputGroup}
          type="file"
          id="image"
          name="img"
          value={input.img}
          onChange={handleImageChange}
        />
        <br />
        <br />
        {previewImage && (
          <img
            className={styles.image}
            id="preview"
            src={previewImage}
            alt="Preview"
          />
        )}
      </div>
      <button
        className={styles.buttonDelete}
        type="button"
        onClick={handleRemoveImage}
      >
        Eliminar imagen
      </button>
      <br />
      <button
        className={styles.buttonCreate}
        type="submit"
        onClick={handleSubmit}
      >
        Crear Producto
      </button>
      {showSuccessMessage && (
        <div className="success-modal">¡Producto creado exitosamente!</div>
      )}
    </form>
  );
};

export default AñadirProducto;
