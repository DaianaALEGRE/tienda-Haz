import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({servicios}) => {
  return (
    
         <div className="contenedorServicios fade">
      {servicios.map(serv => <Item key={serv.id} {...serv} />)}
    </div>
  
  )
}

export default ItemList
