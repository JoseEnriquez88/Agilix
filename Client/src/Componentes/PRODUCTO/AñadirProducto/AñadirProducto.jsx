import { useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { setNombre, setPrecio, setImg, crearProducto } from '../../../Redux/crearProductoSlice';
import styles from "../AñadirProducto/AñadirProducto.module.css";
import axios from "axios";

const InitialCreate = {
  nombre: "",
  precio: "",
  img: "",
};

const AñadirProducto = () => {
  // const dispatch = useDispatch();
  // const { nombre, precio, img } = useSelector((state) => state.productoCreado);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [input, setInput] = useState(InitialCreate);

  const handleChange = (event) => {
    // dispatch(setNombre(event.target.value));
    setInput({ ...input, [event.target.name]: event.target.value });

    // const handlePriceChange = (event) => {
    //   dispatch(setPrecio(event.target.value));
    // };
  };

  const handleImageChange = (event) => {
    // const file = event.target.files[0];
    setInput({ ...input, [event.target.name]: event.target.value });
    // const previewImage = document.getElementById("preview");
    // previewImage.src = file ? URL.createObjectURL(file) : "#";
    // previewImage.style.display = file ? "block" : "none";
  };

  const handleRemoveImage = () => {
    // Limpiar el input de tipo "file" para permitir seleccionar otra imagen
    const fileInput = document.getElementById("image");
    fileInput.value = "";

    // Restablecer la vista previa
    const previewImage = document.getElementById("preview");
    previewImage.src = "#";
    previewImage.style.display = "none";

    // Eliminar la imagen del estado Redux
    setInput({ ...input, img: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(input);
    try {
      const response = await axios.post(
        `http://localhost:3001/productos`,
        input
      );
      // Mostrar el mensaje de éxito
      setShowSuccessMessage(true);

      // Ocultar el mensaje después de un breve tiempo
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // // Crea un objeto formData con los datos del producto
  // const formData = new FormData();
  // formData.append('nombre', nombre);
  // formData.append('precio', precio);
  // formData.append('img', img);

  // // Llama al Thunk para enviar los datos al backend
  // await dispatch(crearProducto(formData));

  // // Mostrar el mensaje de éxito
  // setShowSuccessMessage(true);

  // // Ocultar el mensaje después de un breve tiempo
  // setTimeout(() => {
  //   setShowSuccessMessage(false);
  // }, 2000);

  // Limpiar los campos del formulario después de un breve tiempo
  //   setTimeout(() => {
  //     dispatch(setNombre(''));
  //     dispatch(setPrecio(''));
  //     dispatch(setImg(null));
  //   }, 2500);
  // };

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
        {/* {input.img && (
          <img
            className={styles.image}
            id="preview"
            src={URL.createObjectURL(input.img)}
            alt="Preview"
          />
        )} */}
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
