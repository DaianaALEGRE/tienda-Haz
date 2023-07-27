import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({id ,nombre ,precio ,img, stock}) => {
  return (
    <div className='cardServ'>
      <img className='imgServ'  src={img} alt={nombre} />
      <h3>Nombre:{nombre}</h3>
      <p>Precio ${precio} </p>
      <p>ID {id} </p>
      <Link to={`/Item/${id}`} className='btnServ'> Ver Detalles </Link>
     
    <p>Cupos del mes : {stock} </p>
    </div> 
  )
}

export default Item
