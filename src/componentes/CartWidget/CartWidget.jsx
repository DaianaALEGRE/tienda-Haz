import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"


const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext);
    console.log ("cantidadTotal", cantidadTotal)
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/1160/1160009.png?w=740&t=st=1686519420~exp=1686520020~hmac=736acb9c33b42077825d0f3198fd6a625eadd216234d8290fbdcf3cb91bd1958";
    return (
        <div className="cart">
        <Link to="/cart">
            <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
            {
                cantidadTotal >= 0 && <strong> {cantidadTotal} </strong>
            }
        </Link>
    </div>
)
}
export default CartWidget
