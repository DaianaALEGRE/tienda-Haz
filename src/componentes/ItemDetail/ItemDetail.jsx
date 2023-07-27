import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';
import "./ItemDetail.css"


const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //useContext:
  const { agregarProducto } = useContext(CarritoContext);
  //


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contDetalle'>
      <img className='imgDetalle' src={img} alt={nombre} />
      <div className="contBody">
        <h2 className='hDetalle'>nombre {nombre} </h2>
        <h3 className='hDetalle'>precio ${precio} </h3>
        <p className='pDetalle'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas praesentium ratione animi voluptate iure magnam debitis amet voluptatum nihil illum accusantium sequi eos vero beatae id magni, tempore deserunt? Quisquam?
        </p>
        <p>Cupos del mes : {stock} </p>   
        {
          //Acá empleamos la lógica del montaje y desmontaje de componentes. 
        }

        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
        }
      </div>

    </div>
  )
}

export default ItemDetail;
