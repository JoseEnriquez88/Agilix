const uuidv4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const floatRegex = /^[+-]?\d+(\.\d+)?$/;

const AllVentaValidation=(id,id_cliente,id_usuario,total_venta) =>{
    if (!uuidRegex.test(id_cliente)|| !uuidv4Regex.test(id_cliente)) {
        throw new Error(`El Cliente  no es válido`);
    }
    if(!uuidRegex.test(id_usuario)|| !uuidv4Regex.test(id_usuario)){
        throw new Error(`El Usuario no es válido`);
    }
    if(!floatRegex.test(total_venta)){
        throw new Error(`El Total no es válido `);
    }
    if(!uuidRegex.test(id) || !uuidv4Regex.test(id)){
        throw new Error(`El id no es válido `);
    }
};
module.exports = AllVentaValidation

