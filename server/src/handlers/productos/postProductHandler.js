const postProduct = require("../../controllers/productos/postProduct");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const storage = multer.memoryStorage();
const upload = multer({ storage });

const postProductHandler = async (req, res) => {
  const { nombre, precio, tipo, stock } = req.body;
  try {
    const imagen = await cloudinary.uploader.upload(req.file.path,{folder:'Agilix'});
    console.log("esto es:", imagen);
    const imagenURL = imagen.secure_url;
    console.log("esto es la URL:", imagenURL);
    const productosCreados = await postProduct(nombre, imagenURL, precio, tipo, stock);
    return res.status(201).json(productosCreados);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = postProductHandler;