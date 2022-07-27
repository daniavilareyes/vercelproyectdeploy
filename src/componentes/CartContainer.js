import { useContext } from "react"
import CarritoContext from "./CartContext"
import Button from "./Boton"
import CartContainerList from "./CartContainerList"
import { Link } from "react-router-dom"
import './Cart.css' 

const CartContenedor = ()=>{
    const {carrito} = useContext(CarritoContext)

    return (
        <>
           
           {carrito.length > 0 
           ? <div>
           <CartContainerList carrito={carrito}/>
           <div className="divbotonfinalizarcompra">
            <p>El botón de la felicidad ↴</p>
           <Link to='/checkout'><Button label='Finalizar Compra' /></Link>
           </div>
           </div>
           : <div>
             <h1> No hay productos en el carrito</h1>
             <Link to='/'><Button label='Ir a Productos'/></Link>
           </div>
           }
            
        </>
    )
}

export default CartContenedor