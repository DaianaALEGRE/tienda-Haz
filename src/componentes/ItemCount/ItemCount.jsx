import React, { useState } from 'react';

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    funcionAgregar(contador);
    console.log(`Agregado al carrito ${contador} items`);
  };

  return (
    <>
      <div>
        <h2>Mi contador</h2>
        <div className="contador">
          <button onClick={disminuirContador}>-</button>
          <strong>{contador}</strong>
          <button onClick={aumentarContador}>+</button>
        </div>
      </div>
      <button className='bDetalle' onClick={agregarAlCarrito}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
