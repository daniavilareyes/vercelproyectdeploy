import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db }  from './servicios/firebase/index'


const ItemListContainer = () => {
    const [ productos, setProductos ] = useState([])
    const {categoryId} = useParams()
    const [ loading, setLoading] = useState(false)

    useEffect (() => {
         setLoading(true)
        const collectionRef = categoryId ? (query(collection(db, 'articulos'), where ('category', '==', categoryId)))
                                         : collection(db, 'articulos')

        getDocs(collectionRef).then(response => {
            const articulosFromFirestore = response.docs.map(doc =>{
                return { id: doc.id, ...doc.data() }
            })
           
            setProductos(articulosFromFirestore)

        }).catch(error =>{
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
},[categoryId])

    if(loading){
        return(
            <div className="text-center">
            <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow"  style={{width: "3rem", height: "3rem"}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            </div>
        )
    }
    return (
        <div>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer