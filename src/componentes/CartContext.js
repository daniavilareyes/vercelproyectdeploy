import { useState, useEffect, createContext, useRef } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./servicios/firebase";

const CarritoContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState ([])
    const [cantidad, setCantidad] = useState ([])

    const refrender = useRef(0)

    useEffect (() => {
        const carritoSave = localStorage.getItem('carrito')
        const carritoParse = JSON.parse(carritoSave)

        setCarrito (carritoParse)
    }, [])

    useEffect(() => {
        if (refrender.current > 0 ) {
            localStorage.setItem('carrito', JSON.stringify(carrito))
        }            
        refrender.current += 1 

    },[carrito])

    useEffect(() =>{
        let cantidad = 0 
        carrito.forEach(articulo => {
            cantidad += articulo.cantidad
        });
        setCantidad(cantidad)
    },[carrito])

    const agregarItem = ( agregarProducto ) => {
        if (!carrito.some (articulo => articulo.id === agregarProducto.id)){
            setCarrito([...carrito, agregarProducto])
        }
    }

    const eliminarItem = (id) => {
        const productosCarrito = carrito.filter ( articulo => articulo.id !== id)
        setCarrito (productosCarrito)  
        console.log(productosCarrito)
    }

    const vaciarCarrito = () =>{
        const productosCarrito = []
        setCarrito( productosCarrito)
    }

    const precioTotal = () =>{
      const valor = carrito.reduce((total, articulo) => total + articulo.precio * articulo.cantidad, 0 )
      return valor
    }

    //* autentificacion 
    const [usuario, setUsuario] = useState(null)

    const signup = (email, password ) =>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const loginup = (email, password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(() =>{
        onAuthStateChanged( auth, currentUser =>{
            setUsuario(currentUser)
        })
    },[])

    const logOut = () =>{
        signOut(auth)
    }
    const logInGoogle = () =>{
      const googleProvider = new GoogleAuthProvider()
      signInWithPopup(auth,googleProvider)
    }

    return (
        <CarritoContext.Provider value={{carrito,agregarItem,eliminarItem,vaciarCarrito,cantidad,precioTotal,signup, loginup, usuario, logOut, logInGoogle}}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoContext