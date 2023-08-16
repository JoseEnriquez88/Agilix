import styles from './ConfigPerfil.module.css';
import avatar from './avatarProfile.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PhoneInput from 'react-phone-input-2'
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-phone-input-2/lib/bootstrap.css'

const ConfigPerfil = () => {

    const dispatch = useDispatch();
    
    const [dataUser, setDataUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        telefono: "",
    })
    const [passwordViewLeft, setPasswordViewLeft] = useState(true);
    const [passwordViewRight, setPasswordViewRight] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");
    const handleInputs = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    }
    const handleImageChange = (event) => {
        const imgFile = event.target.files[0];
        setSelectedImage(URL.createObjectURL(imgFile));
        setDataUser({ ...dataUser, imagen: imgFile }); //en caso de que se suba una imagen se crea una propiedad ya que no es necesario enviar una imagen
    };
    const handlePhoneChange = (value) => {  //exepcionalidad del react-phone-input-2 el valor que captura el input necesita tener su propio handler
        setDataUser({ ...dataUser, telefono: value });
    };
    const eliminarAvatar = () => {
        setSelectedImage("");
    }
    const viewPasswordLeft = () => {  //lo divido en dos para que el ver la contraseña sea independiente
        setPasswordViewLeft(!passwordViewLeft);
    }
    const viewPasswordRight = () => {
        setPasswordViewRight(!passwordViewRight);
    }
    const handleSubmit = (event) => { //los campos no deben ser limpiados
        event.preventDefault();
        // dispatch(updateUser(dataUser));  //funcion todavía no disponible
    }

    let primerNombre = dataUser.nombre.split(" ")[0] || "";
    let primerApellido = dataUser.apellido.split(" ")[0] || "";
    let nombreCompleto = primerNombre + " " + primerApellido;  //para solo renderizar un nombre y un apellido
    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorSecundario} >
                <div className={styles.contenedorPerfil}>
                    <h1 className={styles.nombreApellido} >{nombreCompleto.length > 1 ? nombreCompleto : "Nombre Apellido"}</h1>
                    {/* el length tiene que ser mayor a 1 porque el " " de nombreCompleto cuenta como un elemento*/}
                    <h1 className={styles.divIconDeleteImage} onClick={eliminarAvatar}>
                        <DeleteIcon className={styles.iconDeleteImage} />
                    </h1>
                    <img src={selectedImage || avatar} alt="avatar" className={styles.fotoAvatar} onClick={() => document.getElementById('subirFoto').click()}/>
                    <label className={styles.labelSubirFoto} htmlFor="subirFoto">Subir Foto</label>
                    <input type="file" className={styles.inputSeleccionarArchivo} id="subirFoto" onChange={handleImageChange} />
                    <div className={styles.divDescripcionSubirFoto}>
                        <p className={styles.descripcionSubirFoto} >Sube una nueva foto, la imagen se redimensionará automáticamente</p>
                        {/* <p className={styles.descripcionSubirFoto}>Tamaño maximo: 1MB</p> */}
                    </div>
                </div>
                <form className={styles.contenedorConfigPerfil} onSubmit={handleSubmit}>
                    <div className={styles.divNombreConfigPerfil} >
                        <h1 className={styles.configuracionPerfil} >Configuración de Perfil</h1>
                    </div>
                    <div className={styles.containerInputs}>
                        <div className={styles.inputsIzquierda}>
                            <label htmlFor="" className={styles.label}>Nombres:</label>
                            <input type="text" className={styles.input} name='nombre' value={dataUser.nombre} onChange={handleInputs} />
                            <label htmlFor="" className={styles.label}>Email:</label>
                            <input type="text" className={styles.input} name='email' value={dataUser.email} onChange={handleInputs} />
                            <div className={styles.contenedorContrasena}>
                                <label htmlFor="" className={styles.label}>Contraseña:</label>
                                <input type={!passwordViewLeft ? "text" : "password"} name='password' value={dataUser.password} className={styles.input} onChange={handleInputs} />
                                {passwordViewLeft ?
                                    <RemoveRedEyeIcon className={styles.iconView} onClick={viewPasswordLeft} /> :
                                    <VisibilityOffIcon className={styles.iconNoView} onClick={viewPasswordLeft} />}
                                {/* manejador de visibilidad de contraseña*/}
                            </div>
                            <label htmlFor="" className={styles.label}>Teléfono:</label>
                            <PhoneInput country={'ar'} inputProps={{ className: styles.inputTelefono }} containerClass={styles.containerClass}
                                dropdownClass={styles.dropdown} name='telefono' onChange={handlePhoneChange} value={dataUser.telefono} />
                        </div>
                        <div className={styles.inputsDerecha}>
                            <label htmlFor="" className={styles.label} >Apellidos:</label>
                            <input type="text" className={styles.input} name='apellido' value={dataUser.apellido} onChange={handleInputs} />
                            <label htmlFor="" className={styles.label}>Confirmar Email:</label>
                            <input type="text" className={styles.input} name='email'  />
                            {/* los campos de confirmacion password-email no necesitan estar conectados al estado, solo serán validaciones */}
                            <div className={styles.contenedorContrasena}>
                                <label htmlFor="" className={styles.label}>Confirmar Contraseña:</label>
                                <input type={!passwordViewRight ? "text" : "password"} name='password' className={styles.input} />
                                {passwordViewRight ?
                                    <RemoveRedEyeIcon className={styles.iconView} onClick={viewPasswordRight} /> :
                                    <VisibilityOffIcon className={styles.iconNoView} onClick={viewPasswordRight} />}
                            </div>
                        </div>
                    </div>
                    <button type="submit" className={styles.botonGuardar} >Guardar Cambios</button>
                </form >
            </div>
        </div>
    )
}

export default ConfigPerfil;