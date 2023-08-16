const notificar_pagos = require("../../controllers/Pagos/notificar_pagos");

const notificar_pagosHandler = async (req, res) => {
    const notificacion = req.body;
    try{
        notificar_pagos(notificacion);
        res.status(201).json({notificacion});
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = notificar_pagosHandler;