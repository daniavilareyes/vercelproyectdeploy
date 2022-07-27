import Cart from './Cart'
import CarritoContext from './CartContext'
import { useContext } from 'react'
import './Cart.css' 


const CartContainerList = ({ carrito }) =>{

    const { precioTotal } = useContext(CarritoContext)

    const total = precioTotal()

    return(
        <div className='containertablacarrito'>
            <table class="table tablacarrito ">
            <thead>
                <tr className='table-active'>
                <th scope="col"></th>
                <th scope="col">Modelo</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {carrito.map (art => <Cart key={art.id}{...art} /> )}
            <tr>
                <th></th>
                <th></th>
                <th>Monto Total</th>
                <th>
                {total}    
                </th>
                <th></th>
            </tr>
            </tbody>
            </table>
        </div>
         
        
    )
}

export default CartContainerList