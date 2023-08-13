const {Venta}=require('../../db')
const AllVentaValidation = require('../../helpers/Venta/AllVentaValidation')

const getVentaById=async(id)=>{
    // AllVentaValidation(id)
    const venta = await Venta.findByPk(id)
     if(!venta){
         throw new Error('La venta no existe')
     }
    console.log(venta);
    return venta
}

module.exports = getVentaById