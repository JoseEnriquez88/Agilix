import { useDispatch, useSelector } from 'react-redux';
import { setNombre, setPrecio, setImg, crearProducto } from '../../Redux/crearProductoSlice';

const CrearProducto = () => {
  const dispatch = useDispatch();
  const { nombre, precio, img } = useSelector((state) => state.productoCreado);

  const handleNameChange = (event) => {
    dispatch(setNombre(event.target.value));
  };

  const handlePriceChange = (event) => {
    dispatch(setPrecio(event.target.value));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    dispatch(setImg(file));

    // Vista previa de la imagen seleccionada
    const previewImage = document.getElementById('preview');
    const reader = new FileReader();

    reader.onload = function (event) {
      previewImage.src = event.target.result;
      previewImage.style.display = 'block';
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      previewImage.src = '#';
      previewImage.style.display = 'none';
    }
  };

  const handleRemoveImage = () => {
    // Limpiar el input de tipo "file" para permitir seleccionar otra imagen
    const fileInput = document.getElementById('image');
    fileInput.value = '';

    // Restablecer la vista previa
    const previewImage = document.getElementById('preview');
    previewImage.src = '#';
    previewImage.style.display = 'none';

    // Eliminar la imagen del estado Redux
    dispatch(setImg(null));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crea un objeto formData con los datos del producto
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('precio', precio);
    formData.append('img', img);

    // Llama al Thunk para enviar los datos al backend
    dispatch(crearProducto(formData));
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Nombre: </label>
        <input type="text" id="name" value={nombre} onChange={handleNameChange} /> 
      </div>
      <div>
        <label htmlFor="price">Precio: </label>
        <input type="text" id="price" value={precio} onChange={handlePriceChange} /> 
      </div>
      <div>
        <label htmlFor="image">Imagen: </label>
        <input type="file" id="image" onChange={handleImageChange} />
        <br />
        {img && (
          <>
            <img id="preview" src={URL.createObjectURL(img)} alt="Preview"/>
          </>
        )}
      </div>
        <button type="button" onClick={handleRemoveImage}>Eliminar imagen</button>
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default CrearProducto;