import React from "react";
import { useState } from 'react';

const Contador =({ stock=0 , inicial= 1, onAdd })=> {
    const [cantidad, setCantidad] = useState(inicial)

    const decrement = () => {
       if( cantidad > 1 ){
        setCantidad(cantidad -1)
       } 
    }

    const increment = () => {
      if( cantidad < stock){
        setCantidad(cantidad + 1)
      }
    }
  

  return (
      <div className='Counter'>          
            <div className='counterContainer'>
                <button className="Button boton counterControls " onClick={decrement}>-</button>
                <h3 className='Number counterControls'>{cantidad}</h3>
                <button className="Button boton counterControls" onClick={increment}>+</button>
            </div>
            <div className='containerAgregar'>
            <button className="Button boton" onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
       </div>
  )

}


export default Contador
