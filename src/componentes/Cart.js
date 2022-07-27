import CartContainerList from "./CartContainerList"
import { useContext } from "react"
import CarritoContext from "./CartContext"
import './Cart.css' 


const Cart = ({ modelo, precio, img, cantidad, id }) =>{

  const { eliminarItem } = useContext(CarritoContext)

    return(
        <tr>
        <th ><img className="imagentablacart" src={img}/></th>
        <td>{modelo}</td>
        <td>{cantidad}</td>
        <td>{precio}</td>
        <td><button class="btn btn-danger" onClick= {()=>{eliminarItem(id)}}> Eliminar </button></td>
        
      </tr>
    )
}

export default Cart