import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Detalle_De_Compra.module.css";
import { quitarDelCarrito } from "../../../../Redux/carritoDeComprasSlice";
import axios from "axios";
import { getClientByDni } from "../../../../Redux/clientesSlice";
import SearchIcon from '@mui/icons-material/Search';

const DetalleDeCompra = () => {
  const carrito = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const [qrGenerado, setQrGenerado] = useState(false);
  const [dniBusqueda, setDniBusqueda] = useState("");
  const [habilitarGenerarQR, setHabilitarGenerarQR] = useState(true);


  let clientEncontrado = useSelector((state) => state.clientes.clientByDni);
  const usuarioID = "31d2b151-0eb5-4d9c-a893-e6946200d4f2"; //poner usuario


  
    

    const handleBuscarPorDNI = async () => {
        if (dniBusqueda) {
            try {
                dispatch(getClientByDni(dniBusqueda));
                if (clientEncontrado) {
                    setHabilitarGenerarQR(false);
                }
                console.log("Buscando cliente por DNI:", dniBusqueda);
            } catch (error) {
                console.log("Error al buscar cliente por DNI:", error.message);
            }

        }
    }


    // Calcular el precio total del carrito
    const precioTotalCarrito = carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);

    const handleEliminarProducto = (idProducto) => {
        dispatch(quitarDelCarrito(idProducto));
    };
    const handleVolverAtras = () => {
        window.history.back();
    };

    const handleGenerarQR = async () => {
        let InfoCarrito = carrito.map(item => {
            if (item) {
                return {
                    id: item.producto.id,
                    nombre: item.producto.nombre,
                    cantidad: item.cantidad,
                    precio: item.producto.precio
                }
            } else {
                return "Carrito vacío";
            }
        })
        setDniBusqueda("");
        setHabilitarGenerarQR(true);


  const handleBuscarPorDNI = async () => {
    if (dniBusqueda) {
      try {
        dispatch(getClientByDni(dniBusqueda));
        if (clientEncontrado) {
          setHabilitarGenerarQR(false);
        }

        console.log("Buscando cliente por DNI:", dniBusqueda);
      } catch (error) {
        console.log("Error al buscar cliente por DNI:", error.message);
      }
        InfoCarrito.length > 0 ? setQrGenerado(true) : setQrGenerado(false);
    }
  };

  // Calcular el precio total del carrito
  const precioTotalCarrito = carrito.reduce(
    (total, item) => total + item.producto.precio * item.cantidad,
    0
  );

  const handleEliminarProducto = (idProducto) => {
    dispatch(quitarDelCarrito(idProducto));
  };
  const handleVolverAtras = () => {
    window.history.back();
  };

  const handleGenerarQR = async () => {
    let InfoCarrito = carrito.map((item) => {
      if (item) {
        return {
          id: item.producto.id,
          nombre: item.producto.nombre,
          cantidad: item.cantidad,
          precio: item.producto.precio,
        };
      } else {
        return "Carrito vacío";
      }
    });
    setDniBusqueda("");
    setHabilitarGenerarQR(true);

    if (InfoCarrito.length > 0 && clientEncontrado) {
      try {
        await axios.post("/pagos/nueva_orden", {
          id_cliente: clientEncontrado.id,
          id_usuario: usuarioID,
          total_venta: precioTotalCarrito,
          InfoCarrito: InfoCarrito,
        });
        console.log("Items Enviados: ", InfoCarrito);
      } catch (error) {
        console.log(
          "Error al enviar los datos a Mercado Pago (componente Detalle) " +
          error.message
        );
      }
    } else {
      console.log("No hay productos en InfoCarrito");
    }


    InfoCarrito.length > 0 ? setQrGenerado(true) : setQrGenerado(false);
  };

  const handlerEliminarQR = async () => {
    setQrGenerado(false);
    await axios.delete("/pagos/eliminar_orden");
  };

  return (
    <div className={styles.ContenedorGeneral}>
      <div className={styles.ContenedorTitulo}>
        <h2 className={styles.detalles}>Detalle de Compra</h2>
      </div>
      <div className={styles.ContenedorProductosYTotal}>
        <div className={styles.ContenedorProductos}>
          <h2>Productos en el Carrito:</h2>
          <div className={styles.search}>
            DNI del Cliente:
            {!habilitarGenerarQR && <h3 className={styles.nombreClientes}>{clientEncontrado.nombre}</h3>}

            <input
              className={styles.SearchCliente}
              type="text"
              placeholder="Ingrese DNI"
              value={dniBusqueda}
              onChange={(event) => setDniBusqueda(event.target.value)} //setear dniBusqueda
            />
            <button className={styles.ButtonSearch} onClick={handleBuscarPorDNI}><SearchIcon /></button>
            <div className={styles.ContenedorBotones}>
              <button className={styles.botonGenerar} disabled={habilitarGenerarQR || precioTotalCarrito <= 0} onClick={handleGenerarQR}>Generar orden</button>
              <button className={styles.botonEliminaror} disabled={!qrGenerado} onClick={handlerEliminarQR}>Eliminar orden</button>
              <button className={styles.botonVolver} onClick={handleVolverAtras}>Volver</button>
            </div>
          </div>
          {carrito.map((item, index) => (
            <div key={index} className={styles.ContenedorCard}>
              <img className={styles.img} src={item.producto.img} />
              <h3>Producto: {item.producto.nombre}</h3>
              <h3>Precio por unidad: ${item.producto.precio}</h3>
              <h3>Cantidad: {item.cantidad}</h3>
              {/* <img className={styles.imagen} src={item.producto.img} alt={item.producto.nombre} /> */}
              <h3>Precio total del producto: ${item.producto.precio * item.cantidad}</h3>
              <button className={styles.botonEliminar} onClick={() => handleEliminarProducto(item.producto.id)}>Eliminar</button>
            </div>
          ))}
        </div>
        <div className={styles.ContenedorTotal}>
          <h2 className={styles.Total}>Total de la compra: ${precioTotalCarrito}</h2>
          <h3 className={styles.escanea}>Escanea QR:</h3>
          <div className={styles.ContenedorQR}>
            {qrGenerado && <img className={styles.imagenQR} src='https://www.mercadopago.com/instore/merchant/qr/84881780/0e64ee574a0a442f9619410ab3e11bbd33e88a1f14e94cd5941993d725caf3d1.png' />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleDeCompra;