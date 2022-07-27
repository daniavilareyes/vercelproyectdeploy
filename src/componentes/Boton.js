import React from "react";



const Button = (props) => {
        return <button onClick = {props.clickcomprar} className='boton'>{props.label}</button>
    }

export default Button;