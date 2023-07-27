import { useState, useEffect } from "react"


const Contador = ({ stock, inicial }) => {
    const [contador, setContador] = useState(inicial);

    useEffect(() => {
        document.title = `contador: ${contador}`;

    }, [contador])

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }
    const disminuirContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    const agregarAlCarrito = () => {
        console.log(` agregado al carrito ${contador} items`)
    }
    return (
        <div className="contador">

            <h2>mi  contador</h2>
            <div className="contador">
                <button onClick={disminuirContador}> - </button>
                <strong> {contador} </strong>
                <button onClick={aumentarContador}> + </button>
            </div>

            <button onClick={agregarAlCarrito}>agregar al carrito</button>
        </div>

    )
}

export default Contador
