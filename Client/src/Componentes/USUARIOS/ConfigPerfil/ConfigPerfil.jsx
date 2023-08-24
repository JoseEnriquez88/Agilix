import styles from './ConfigPerfil.module.css';
import avatar from './avatarProfile.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PhoneInput from 'react-phone-input-2'
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-phone-input-2/lib/bootstrap.css'
import { fetchUsuarios } from '../../../Redux/usuariosSlice';
import { NavLink } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios';

const ConfigPerfil = () => {

    const dispatch = useDispatch();
    const usuarios = useSelector((state) => state.usuarios.allUsuarios);
    useEffect(() => {
        dispatch(fetchUsuarios());
    }, [dispatch]);


    console.log("usuarios", usuarios);
    const usuario = usuarios[usuarios.length - 1];
    console.log("usuario", usuario);
    const [dataUser, setDataUser] = useState({
        nombre: usuario ? usuario.nombre : "",
        apellido: usuario ? usuario.apellido : "",
        telefono: usuario ? usuario.telefono : "",
        email: usuario ? usuario.email : "",
        dni: usuario ? usuario.dni : "",
        contraseña: usuario ? usuario.contraseña : "",
        img: usuario ? usuario.img : "",
    })
    useEffect(() => {
        if (usuario) {
            setDataUser({
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                telefono: usuario.telefono,
                email: usuario.email,
                dni: usuario.dni,
                contraseña: usuario.contraseña,
                img: usuario.img
            });
        }
    }, [usuario]);
    const [passwordViewLeft, setPasswordViewLeft] = useState(true);
    const [passwordViewRight, setPasswordViewRight] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const handleInputs = (event) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    }
    const handleImageChange = (event) => {
        const imgFile = event.target.files[0];
        setSelectedImage(URL.createObjectURL(imgFile));
        setDataUser({ ...dataUser, img: imgFile }); //en caso de que se suba una imagen se crea una propiedad ya que no es necesario enviar una imagen
    };
    const handlePhoneChange = (value) => {  //exepcionalidad del react-phone-input-2 el valor que captura el input necesita tener su propio handler
        setDataUser({ ...dataUser, telefono: value });
    };
    const eliminarAvatar = () => {
        if (isEditing) {
            setSelectedImage("");
            setDataUser({ ...dataUser, img: "" });
        }
    }
    const viewPasswordLeft = () => {  //lo divido en dos para que el ver la contraseña sea independiente
        setPasswordViewLeft(!passwordViewLeft);
    }
    const viewPasswordRight = () => {
        setPasswordViewRight(!passwordViewRight);
    }
    const handleSubmit = async (event) => { //los campos no deben ser limpiados
        event.preventDefault();
        const formData = new FormData();
        formData.append('nombre', dataUser.nombre);
        formData.append('apellido', dataUser.apellido);
        formData.append('telefono', dataUser.telefono);
        formData.append('email', dataUser.email);
        formData.append('dni', dataUser.dni);
        formData.append('contraseña', dataUser.contraseña);
        formData.append('img', dataUser.img);
        try {
            const response = await axios.put(`/usuarios/${usuario.id}`, formData);
            console.log(response);
        } catch (error) {
            console.error('Error en la solicitud PUT', error.message);
        }
    }

    let primerNombre = dataUser.nombre.split(" ")[0] || "";
    let primerApellido = dataUser.apellido.split(" ")[0] || "";
    let nombreCompleto = primerNombre + " " + primerApellido;  //para solo renderizar un nombre y un apellido
    return (
        <div>
            <div className={styles.ContenedorBotonBack}>
                <NavLink to='/' className={styles.BotonBack}>
                    <ArrowBackIosNewIcon className={styles.IconoBack} />
                </NavLink>
            </div>
        <div className={styles.contenedorPrincipal}>
            <div className={styles.contenedorSecundario}>
                <div className={styles.contenedorPerfil}>
                    <h1 className={styles.nombreApellido} >{nombreCompleto.length > 1 ? nombreCompleto : "Nombre Apellido"}</h1>
                    {/* el length tiene que ser mayor a 1 porque el " " de nombreCompleto cuenta como un elemento*/}
                    <h1 className={styles.divIconDeleteImage} onClick={eliminarAvatar} >
                        <DeleteIcon className={styles.iconDeleteImage} />
                    </h1>
                    {dataUser.img === "" ? (
                        <img src={avatar} alt="avatar" className={styles.fotoAvatar} onClick={() => document.getElementById('subirFoto').click()} />
                    ) : (
                        <img src={typeof dataUser.img === "string" ? dataUser.img : selectedImage}
                            alt="avatarr" className={styles.fotoAvatar} />
                    )
                    }
                    <label className={styles.labelSubirFoto} htmlFor="subirFoto">Subir Foto</label>
                    <input type="file" className={styles.inputSeleccionarArchivo} id="subirFoto" onChange={handleImageChange} disabled={!isEditing} />
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
                            <label htmlFor="" className={styles.label}>Nombre:</label>
                            <input type="text" className={styles.input} name='nombre' value={dataUser.nombre} onChange={handleInputs} disabled={!isEditing} />
                            <label htmlFor="" className={styles.label}>Email:</label>
                            <input type="text" className={styles.input} name='email' value={dataUser.email} onChange={handleInputs} disabled={!isEditing} />
                            <div className={styles.contenedorContrasena}>
                                <label htmlFor="" className={styles.label}>Contraseña:</label>
                                <input type={!passwordViewLeft ? "text" : "password"} name='contraseña' value={dataUser.contraseña} className={styles.input} onChange={handleInputs} disabled={!isEditing} />
                                {passwordViewLeft ?
                                    <RemoveRedEyeIcon className={styles.iconView} onClick={viewPasswordLeft} /> :
                                    <VisibilityOffIcon className={styles.iconNoView} onClick={viewPasswordLeft} />}
                                {/* manejador de visibilidad de contraseña*/}
                            </div>
                            <label htmlFor="" className={styles.label}>Teléfono:</label>
                            <PhoneInput country={'ar'} inputProps={{ className: styles.inputTelefono }} containerClass={styles.containerClass}
                                dropdownClass={styles.dropdown} name='telefono' onChange={handlePhoneChange} value={dataUser.telefono} disabled={!isEditing} />
                        </div>
                        <div className={styles.inputsDerecha}>
                            <label htmlFor="" className={styles.label} >Apellido:</label>
                            <input type="text" className={styles.input} name='apellido' value={dataUser.apellido} onChange={handleInputs} disabled={!isEditing} />
                            <label htmlFor="" className={styles.label}>DNI:</label>
                            <input type="text" className={styles.input} name='dni' value={dataUser.dni} onChange={handleInputs} disabled={!isEditing} />
                            {/* los campos de confirmacion password-email no necesitan estar conectados al estado, solo serán validaciones */}
                            <div className={styles.contenedorContrasena}>
                                <label htmlFor="" className={styles.label}>Confirmar Contraseña:</label>
                                <input type={!passwordViewRight ? "text" : "password"} name='password' className={styles.input} disabled={!isEditing} />
                                {passwordViewRight ?
                                    <RemoveRedEyeIcon className={styles.iconView} onClick={viewPasswordRight} /> :
                                    <VisibilityOffIcon className={styles.iconNoView} onClick={viewPasswordRight} />}
                            </div>
                        </div>
                    </div>
                    <button className={!isEditing ? styles.botonEditar : styles.botonCancelar} onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "Cancelar Edición" : "Editar"}
                    </button>
                    <button type="submit" className={!isEditing?styles.botonGuardarDisabled:styles.botonGuardar} >Guardar Cambios</button>
                </form >
            </div>
        </div>
        </div>
    )
}

export default ConfigPerfil;