import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {tablaUsuario} from "./tablaUsuario"
const TablaUsuarios = () => {
    const dispatch = useDispatch();

    // ! Cambiar nombre si es diferente
    const usuarios = useSelector((state) => state.usuarios.usuarios);
    habilitarUsuarioHandler=(id)=> {
        //! El Dispatch hay que ver como se pone redux toolkit
        dispatch({
            type: "HABILITAR_USUARIO",
            payload: id,
        });
    }
    useEffect(() => {
        //! El Dispatch hay que ver como se pone con redux toolkit
        dispatch({
            type: "GET_USUARIOS",
        });
    }, []);
    return (
        <div>
            <h1>TablaUsuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Email</th>
                        <th>Habilitar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => {
                            return (
                                <tablaUsuario key={usuario.id} usuario={usuario} habilitarUsuarioHandler={habilitarUsuarioHandler}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TablaUsuarios;