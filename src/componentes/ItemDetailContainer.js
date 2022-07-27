import { useEffect, useState } from "react"
import ItemDetail  from './ItemDetail'
import { useParams } from "react-router-dom"
import { getDoc, doc } from 'firebase/firestore'
import { db }  from './servicios/firebase/index'


const ItemDetailContainer = () =>{
   
    const [product, setProduct] = useState()
    const { articuloId } = useParams()

   useEffect(() => {
    const docArticulo = doc (db,'articulos', articuloId)

    getDoc (docArticulo).then(doc => {
        const artFirebaseDetail = {id: doc.id, ...doc.data()}
        setProduct(artFirebaseDetail)
    }).catch(error => {
        console.log(error)
    })
   }, [articuloId])
   
    return (
        <>
            <h1 className="detalledelproducto">Detalle del Producto</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer