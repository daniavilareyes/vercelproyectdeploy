import { useContext } from "react"
import { Link } from "react-router-dom"
import CarritoContext from "./CartContext"
import Login from "./Login"
import Registro from "./Registro"


const Ingreso = () => {

 const { usuario } = useContext(CarritoContext)

    return(
    
        <div className="container contbienvenido">
            <div className="row">
        {usuario
        ? <div className="BienvenidoUsuario">
            <h1> Bienvenido {usuario.email}</h1>
            <Link to='/'><button className="boton">Ir a productos</button></Link>
        </div>
        
        
        :<div className="ingreso">
            <div className="col continiciarsesion">
                <Login/>
            </div>
            <div className=" col">
                <Registro/>
            </div> 
        </div>
            }
            </div>
            
        </div>
    )
}

export default Ingreso