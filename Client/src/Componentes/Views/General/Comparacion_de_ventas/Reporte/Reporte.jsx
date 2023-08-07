import React from 'react';

const Reporte = () => {
    const pagos = [
        {
          id: 1,
          producto: "Leche",
          precio: 2.5,
        },
        {
          id: 2,
          producto: "Pan",
          precio: 1.0,
        },
        {
          id: 3,
          producto: "Huevos",
          precio: 3.2,
        },
        {
          id: 4,
          producto: "Arroz",
          precio: 2.0,
        },
        {
          id: 5,
          producto: "Carne",
          precio: 8.5,
        },
      ];

    return(
        <div>
            {pagos.forEach((pago) => {
                return(
                    <div key={pago.id}>
                        <h2>{pago.producto}</h2>
                        <p>${pago.precio}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Reporte;