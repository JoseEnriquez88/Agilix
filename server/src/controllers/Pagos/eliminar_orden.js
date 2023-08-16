const axios = require("axios");
const { MP_USER_ID, MP_EXTERNAL_POS_ID, MP_ACCESS_TOKEN } = process.env;

const eliminar_orden = async () => {
    await axios.delete(`https://api.mercadopago.com/instore/qr/seller/collectors/${MP_USER_ID}/pos/${MP_EXTERNAL_POS_ID}/orders`, {
        headers: {
            Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
        },
    })
    console.log("Orden eliminada correctamente");
}

module.exports = eliminar_orden;