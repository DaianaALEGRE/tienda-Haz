import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import img from "../../../public/img/tarot.jpg";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="cart-item cart-stock">
      <img src={img} alt={item.nombre} />
      <h4> {item.nombre} </h4>
      <p> Cantidad: {cantidad} </p>
      <p> Precio: {item.precio} </p>
      <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
      <hr />
    </div>
  )
}

export default CartItem