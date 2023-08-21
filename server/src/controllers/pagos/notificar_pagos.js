const mercadopago = require("mercadopago");
const { MP_ACCESS_TOKEN, MP_CLIENT_ID, MP_CLIENT_SECRET } = process.env;
const { Orden } = require("../../db");
const  postVenta  = require("../../controllers/ventas/postVenta");

mercadopago.configure({
    access_token: MP_ACCESS_TOKEN,
    client_id: MP_CLIENT_ID,
    client_secret: MP_CLIENT_SECRET
})

const notificar_pagos = async (pago) => {
    if (pago.type === 'payment') {
        const data = await mercadopago.payment.findById(pago['data.id'])
        //Modificar según la información que se necesite
        const infoPago = {
            fecha: data.response.date_created,
            total_venta: data.response.transaction_amount,
            Estado: data.response.status === 'approved' ? 'Aprobado' : 'Rechazado',
            id_mercado_pago: data.response.order.id
        }
        console.log("Esto es infoPago: ", infoPago);
        const { fecha, total_venta, id_mercado_pago } = infoPago
        const ordernes = await Orden.findAll();
        const orden = ordernes[0];
        const { id_cliente, id_usuario, productos } = orden;
        console.log("Esto es productos", productos);
        await postVenta(id_cliente, id_usuario, total_venta, productos, id_mercado_pago, fecha); //creo la venta 
        await Orden.destroy({ where: {} }); //limpiar la tabla
    }
}

module.exports = notificar_pagos;