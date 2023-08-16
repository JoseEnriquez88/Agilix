const axios = require("axios");
const { MP_USER_ID, MP_EXTERNAL_STORE_ID, MP_EXTERNAL_POS_ID, MP_ACCESS_TOKEN } = process.env;

const generar_Orden = async (InfoCarrito) => {
    console.log("Esto llegó al controller: ", InfoCarrito);
    if (InfoCarrito) {
        try {
            const postOrden = await axios.put(
                `https://api.mercadopago.com/instore/qr/seller/collectors/${MP_USER_ID}/stores/${MP_EXTERNAL_STORE_ID}/pos/${MP_EXTERNAL_POS_ID}/orders`,
                {
                    external_reference: "Factura Agilix",
                    title: "Venta de productos Agilix",
                    description: "Agilix - Venta de productos",
                    notification_url:"https://031d-2800-810-517-9a4-e801-bfca-35e1-72e7.ngrok.io/notificar_pagos",
                    total_amount: InfoCarrito.map(item => item.precio * item.cantidad).reduce((a, b) => a + b, 0),
                    items: InfoCarrito.map(item => ({
                        sku_number: "A123K9191938",
                        category: "marketplace",
                        title: "Compra de productos - Agilix.com",
                        description: `Compra de: ${item.nombre} x${item.cantidad}`,
                        unit_price: item.precio,
                        quantity: item.cantidad,
                        unit_measure: "unit",
                        total_amount: item.precio * item.cantidad,
                    })),
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${MP_ACCESS_TOKEN}`,
                    },
                }
            );

            // Manejar la respuesta de la solicitud aquí
            console.log("Orden generada con éxito", postOrden.data);
        } catch (error) {
            // Manejar el error de la solicitud aquí
            console.error("Error al enviar los datos a Mercado Pago (Controlador) ", error.response.data.message);
        }
    } else {
        console.log("No hay productos en el carrito");
    }
};

module.exports = generar_Orden;
