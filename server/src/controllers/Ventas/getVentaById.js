const {Venta}=require('../../db')
const AllVentaValidation = require('../../helpers/Venta/AllVentaValidation')

const getVentaById=async(id)=>{
    // AllVentaValidation(id)
    const venta = await Venta.findByPk(id)
    if(!venta.length){
        throw new Error('La venta no existe')
    }
    return venta
}

module.exports = getVentaById