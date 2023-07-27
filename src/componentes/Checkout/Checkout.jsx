import { useContext, useState } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { collection, addDoc, getDoc, doc, Timestamp, writeBatch } from 'firebase/firestore'
import { db } from "../../services/config";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import './Check.css';



const Checkout = () => {
    const { cantidadTotal, carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [procesandoOrden, setProcesandoOrden] = useState(false);

    const [comprador, setComprador] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        ciudad: '',
        postal: ''
    });

    const nuevaOrden = {
        buyer: comprador,
        items: carrito,
        total: total,
        date: Timestamp.fromDate(new Date())
    }

    const confirmarOrden = () => {

        setProcesandoOrden(true);

        const batch = writeBatch(db);

        const outOfStock = [];

        console.log(carrito)
        nuevaOrden.items.forEach((prod, i) => {
            console.log('prod.item.id:', prod.item.id);
            console.log('db:', db);
            getDoc(doc(db, 'Inventario', prod.item.id)).then(productDocument => {
                if (productDocument.data().stock >= nuevaOrden.items[i].stock) {
                    batch.update(doc(db, 'Inventario', productDocument.idCat), {
                        stock: productDocument.data().stock - nuevaOrden.items[i].stock
                    })
                } else {
                    outOfStock.push({ ...productDocument.data(), id: productDocument.idCat })
                }

            })
        })

        if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), nuevaOrden)
                .then((res) => {
                    batch.commit()
                        .then(() => {
                            console.log(nuevaOrden)
                            Swal.fire({
                                icon: 'success',
                                title: `¡Feliciades! ${nuevaOrden.buyer.nombre} ${nuevaOrden.buyer.apellido} `,
                                text: 'Tu orden se genero con exito.',
                                html:
                                    '<h3>Usted compro: </h3> ' +
                                    `<h4>${nuevaOrden.items[0].item.nombre}</h4>` +
                                    `<b>Total: $${nuevaOrden.total}</b>` +
                                    `<p>Su orden de compra es <b>${res._key.path.segments[1]}</b></p>`,
                            })
                        })


                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ha surgido un error inesperado, por favor intente nuevamente',
                    })

                    console.log('error', error)

                }).finally(() => {
                    setProcesandoOrden(false)
                    vaciarCarrito()
                })
        }
    }


    const handleInputChange = (event) => {
        setComprador({
            ...comprador,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
    }


    return (
        <>
        <div className="check-section fade">
                <div className="check">
                    <h1 className="check-titulo">Datos del comprador</h1>
                    <hr />
                </div>
                <div className="check-formulario">
                    <form className="formulario" onSubmit={enviarDatos}>
                        <div className="inputField">
                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre" required></input>
                        </div>
                        <div className="inputField">
                            <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido" required></input>
                        </div>
                        <div className="inputField">
                            <input type="text" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="telefono" required></input>
                        </div>
                        <div className="inputField">
                            <input type="text" placeholder="E-mail" className="form-control" onChange={handleInputChange} name="email" required></input>
                        </div>
                        <div className="inputField">
                            <input type="text" placeholder="Ingrese su ciudad" className="form-control" onChange={handleInputChange} name="ciudad" required></input>
                        </div>
                        <div className="inputField">
                            <input type="text" placeholder="Codigo Postal" className="form-control" onChange={handleInputChange} name="postal" required></input>
                        </div>

                        <div className="btn-contenedor">
                            <button type="submit" className="btn-enviar delete" onClick={vaciarCarrito}>Cancelar Compra</button>
                            <button type="submit" className="btn-enviar" onClick={confirmarOrden}>Confirmar Compra</button>

                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Checkout