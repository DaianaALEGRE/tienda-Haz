import  { useState, useEffect , useContext } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { CarritoContext } from "../../Context/CarritoContext";
import Loader from "../Loader/Loader";

const ItemListContainer = (props) => {
    const { loading, setLoading } = useContext(CarritoContext);


    const [servicios, setServicios] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        setLoading(true)
        const misServicios = idCategoria ? query(collection(db, "Inventario"), where("idCat", "==", idCategoria)) : collection(db, "Inventario");

        getDocs(misServicios)
            .then(res => {
                const nuevosServicios = res.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setServicios(nuevosServicios);
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [idCategoria])
    return (
        <>
            {loading ? <Loader /> : <ItemList servicios={servicios} />}





        </>
    )
}

export default ItemListContainer;