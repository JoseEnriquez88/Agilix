const notificar_pagos = require("../../controllers/Pagos/notificar_pagos");

const notificar_pagosHandler = async (req, res) => {
    const pago = req.query;
    try{
        notificar_pagos(pago);
        res.sendStatus(201);
    } catch(error) {
        res.status(400).json({ error: "error en el handler del webhook" });
    }
}

module.exports = notificar_pagosHandler;