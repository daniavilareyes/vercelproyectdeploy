import Button from "./Boton";
import { Link } from "react-router-dom";


const Item = ({ id, modelo, precio, img }) =>{


    return(
        <div className='card col col-lg-3 col-md-6 col-sm-7'>
            <img className='card-img-top imagenarticulo' src={img} alt='fotos'></img>
            <div class="card-body">
                <h5 class="card-title">{modelo}</h5>
                <p class="card-text">{precio}</p>
                <div className="divisorcard">
                   
                <Link to={`/detail/${id}`}><Button label='Comprar' /></Link>
                </div>
                <div>
                <Link to={`/detail/${id}`} class="nav-link active"> Ver detalle </Link>
                </div>
            </div>
        </div>
    )
}

export default Item