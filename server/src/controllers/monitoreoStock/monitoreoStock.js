const nodemailer = require('nodemailer');
const { conn, Usuario  } = require('../../db'); // Importa la conexión a la base de datos desde db.js

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "agilix.co@gmail.com",
      pass: "hbpanlmiqxmrvcnl" 
    }
});

// Función para verificar el stock y enviar correos
const checkStockAndNotify = async (producto) => {
  if (producto.stock < 10) {
    const mailOptions = {
      from: 'agilix.co@gmail.com', 
      to: Usuario.email,
      subject: '¡Atención! Bajo Stock de Producto',
      text: `El producto ${producto.nombre} tiene un stock bajo. ¡Actúa pronto!`,
    };

    // Envía el correo electrónico
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado:', info.response);
  }
};

module.exports = checkStockAndNotify;
