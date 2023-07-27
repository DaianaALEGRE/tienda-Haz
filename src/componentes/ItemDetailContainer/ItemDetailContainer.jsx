import { useState, useEffect, useContext } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
import { CarritoContext } from "../../Context/CarritoContext";
import Loader from './../Loader/Loader';



const ItemDetailContainer = () => {
  const { loading, setLoading } = useContext(CarritoContext);

  const [servicio, setServicio] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    setLoading(true)
    const nuevoDoc = doc(db, "Inventario", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoServicio = { id: res.id, ...data }
        setServicio(nuevoServicio);
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [idItem, setLoading])



  return (
    <>
      {loading ? <Loader /> :
        <>
          <div className="container fade">
            <ItemDetail {...servicio} />
          </div></>}
    </>

  )
}

export default ItemDetailContainer