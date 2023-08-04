const tablaUsuario=(usuario,habilitarUsuarioHandler)=>{
    return(
        <tr>
            <td>{usuario.id}</td>
            <td>{usuario.nombre}</td>
            <td>{usuario.telefono}</td>
            <td>{usuario.email}</td>
            <td>
                <button onClick={()=>habilitarUsuarioHandler(usuario.id)}>Habilitar</button>
            </td>
        </tr>
    )
}
export default tablaUsuario;