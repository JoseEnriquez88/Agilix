const mercadopago = require("mercadopago");
const { MP_ACCESS_TOKEN, MP_CLIENT_ID, MP_CLIENT_SECRET } = process.env;

mercadopago.configure({
    access_token: MP_ACCESS_TOKEN,
    client_id: MP_CLIENT_ID,
    client_secret: MP_CLIENT_SECRET
})

const notificar_pagos = async (pago) => {
    if(pago.type === 'payment'){
        const data = await mercadopago.payment.findById(pago['data.id'])
        //Modificar según la información que se necesite
        let infoPago = {
            Fecha: data.response.date_created,
            Monto: data.response.transaction_amount,
            Estado: data.response.status === 'approved' ? 'Aprobado' : 'Rechazado',
            id: data.response.order.id
        }
        console.log(infoPago);
    }
    
}

module.exports = notificar_pagos;