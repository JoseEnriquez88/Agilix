import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./registro.module.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import usuariosSlice from "../../Redux/usuariosSlice";
// import validacionRegistro from "./validacionRegistro";

const url = 'http://localhost:3001/usuarios/registro';

const Registro = ({ setUser }) => {
    const [password, setPassword] = useState(false);
    // const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        contraseña: '',
        dni: '',
        rol: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(url, input);
            if (response.status === 201) {
                alert(`El usuario: ${input.nombre} fue creado exitosamente.`);
                const usuarioRol = { ...input, rol: `${input.rol}` };
                setUser(usuarioRol);
            }
            window.location.href = 'http://localhost:5173/general';
        } catch (error) {
            console.log(error);
            alert(`Hubo un error al crear el usuario: ${input.nombre}. Por favor, intentelo nuevamente.`);
        }
    };


    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });

        // setErrors(validacionRegistro({
        //     ...input,
        //     [event.target.name]: event.target.value
        // }));
    };

    const handlePassword = () => {
        setPassword(!password);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>
                Registrate en <span className={styles.AgilixTittle}>AGILIX</span>
            </h1>
            <div className={styles.form_container}>
                <h1 className={styles.from_heading}>Formulario de registro</h1>
                <div className={styles.left}></div>
                <div className={styles.right}>
                    
                    <input type="text" className={styles.input} placeholder="Nombre" name="nombre" onChange={handleChange} />
                    {/* {errors.nombre && <p className={styles.errors}>{errors.nombre}</p>} */}

                    <input type="text" className={styles.input} placeholder="Apellido" name="apellido" onChange={handleChange} />
                    {/* {errors.apellido && <p className={styles.errors}>{errors.apellido}</p>} */}

                    <input type="text" className={styles.input} placeholder="Teléfono" name="telefono" onChange={handleChange} />
                    {/* {errors.telefono && <p className={styles.errors}>{errors.telefono}</p>} */}

                    <input type="text" className={styles.input} placeholder="Email" name="email" onChange={handleChange} />
                    {/* {errors.email && <p className={styles.errors}>{errors.email}</p>} */}

                    <div className={styles.password_container}>
                        <input type={password ? 'text' : 'password'} className={styles.contraseña_input} placeholder="Contraseña" name="contraseña" onChange={handleChange} />
                        <button className={styles.boton_icono} onClick={handlePassword}>
                            {password ? (
                                <VisibilityIcon className={styles.icon} />
                            ) : (
                                <VisibilityOffIcon className={styles.icon} />
                            )}
                        </button>
                        {/* {errors.contraseña && <p className={styles.errors}>{errors.contraseña}</p>} */}
                    </div>

                    <input type="text" className={styles.input} placeholder="Dni" name="dni" onChange={handleChange} />
                    {/* {errors.dni && <p className={styles.errors}>{errors.dni}</p>} */}

                    <select name="rol" className={styles.select} value={input.rol} onChange={handleChange}>
                        <option value="" disabled>Elija un rol</option>
                        <option value="administrador">Administrador</option>
                        <option value="cajero">Cajero</option>
                    </select>
                    {/* {errors.rol && <p className={styles.errors}>{errors.rol}</p>} */}


                    <div className={styles.buttonContainer}>
                        <button className={styles.btn} onClick={handleSubmit}>Registrarse</button>
                        <Link to='/login'><button className={styles.goBackButton}>Volver</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registro;
