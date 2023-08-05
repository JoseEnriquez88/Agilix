import { useState } from "react";
import styles from "../AñadirProducto/AñadirProducto.module.css";
import axios from "axios";

const InitialCreate = {
  nombre: "",
  precio: "",
  img: "",
};

const AñadirProducto = () => {

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [input, setInput] = useState(InitialCreate);

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleImageChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const handleRemoveImage = () => {
    const fileInput = document.getElementById("image");
    fileInput.value = "";

    const previewImage = document.getElementById("preview");
    previewImage.src = "#";
    previewImage.style.display = "none";


    setInput({ ...input, img: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/productos`,
        input
      );

      setShowSuccessMessage(true);

 
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

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
