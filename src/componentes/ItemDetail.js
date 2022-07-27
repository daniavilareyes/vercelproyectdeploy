import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './Contador'
import Contador from "./Contador";
import CarritoContext from "./CartContext";
import Button from "./Boton";


const ItemDetail = ({ id, modelo, img, precio, stock }) =>{
    const {agregarItem} = useContext(CarritoContext)

    const [cantidadAgregar, setCantidadAgregar] = useState (0)

    const handleOnAdd = (cantidad) => {
        console.log(`se agregaron ${cantidad} ${modelo}`)

        agregarItem({id, modelo, cantidad, precio, img })

        setCantidadAgregar(cantidad)
    }

    return (
        <>
        <div className='container containerDetail'>
                <div className=" d-flex col-md-8  cardDetail">
                     <div className="containerImagen">
                        <img src={img} className='imgDetail ' alt='fotos'/>
                    </div>
                    <div className="containerDetalles">
                    <h2 className="card-title">{modelo}</h2>
                    <h4 className="card-text">{precio}</h4>
                    <select>
                    <option value='talla s'>Talla s </option>
                    <option value='Talla m'>Talla m </option>
                    <option value='Talla l'>Talla l </option>
                    </select>
                    {cantidadAgregar === 0 
                    ? <Contador stock={stock} onAdd={handleOnAdd} />
                    : <Link to='/carrito' className='iracomprar'><Button label='Ir a carrito'/></Link> }
                    </div>
                </div>
            
        </div>
        </>
    )
}

export default ItemDetail