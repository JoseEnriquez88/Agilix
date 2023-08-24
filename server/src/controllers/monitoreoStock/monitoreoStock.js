const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "agilix.co@gmail.com",
      pass: "hbpanlmiqxmrvcnl" 
    }
});

// Importa la función getAllUsers desde su ubicación correcta
const getAllUsers = require('../../controllers/usuarios/getAllUsers');

const checkStockAndNotify = async (producto) => {
  if (producto.stock < 10) {
    try {
      const usuarios = await getAllUsers();
      usuarios.forEach(async (usuario) => {
        const mailOptions = {
          from: 'agilix.co@gmail.com',
          to: usuario.email,
          subject: '¡Atención! Bajo Stock de Producto',
          text: `El producto ${producto.nombre} tiene un stock bajo. ¡Actúa pronto!`,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado:', info.response);
      });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }
};

module.exports = checkStockAndNotify;
