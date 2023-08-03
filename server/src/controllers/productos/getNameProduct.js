const {Productos}=require("../../db")
const {Op}=require("sequelize") 
const getByNameProductValidation = require("../../helpers/producto/getNameProductValidation")

const getByNameProduct = async (name) => {
    getByNameProductValidation(name)
    const data=await Productos.find({
        where:{nombre:{[Op.iLike]: `%${name}%`}}
    })
    if (data.length === 0) throw new Error(`No se encontraron productos para mostrar.`);
    const filter=data.filter(producto=>producto.nombre).toLowerCase().startsWith(name.toLowerCase());
    return [...filter];
}


module.exports = getByNameProduct