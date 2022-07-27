import { useState } from "react"
import { useContext } from "react"
import CarritoContext from "./CartContext"
import { useNavigate } from "react-router-dom"
import { async } from "@firebase/util"


const Login = () => {

    const { loginup, logInGoogle} = useContext(CarritoContext)
    const { carrito} = useContext(CarritoContext)
    const navigate = useNavigate(CarritoContext)

    const [error, setErrores] = useState('')

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleRegister = ({target : {name,value}}) =>{
        setUser({...user,[name]: value})
    }
    const handleLoginSubmit = async (e) =>{
        e.preventDefault()
        setErrores("")
        try{
         await loginup (user.email, user.password)  
            if (carrito.length >= 1 ) {
                 navigate('/checkout') 
            } else {
               navigate("/")
               
            }
            
        
        } catch (error) {
            setErrores(error.code)
            console.log(error)
        }
         
    }
    
    const handleSubmitGoogle = async () => {
        try {
            await logInGoogle()
            if (carrito.length >=1 ){
                navigate('/checkout')
            } else {
                navigate('/')
            }
        } catch ( error ){
            setErrores(error.code)
        }
    }

    return(
        <div className='iniciarsesion'>
        {error && <p>{error}</p>}
        <p className="tituloinises"> Iniciar Sesion </p>
        <form onSubmit={handleLoginSubmit} className='formularioingreso'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id="email" placeholder='youremail@company.com'
            onChange={handleRegister}/>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password'
            onChange={handleRegister}/>
            <button className="boton">Ingresa</button>
            <button onClick={handleSubmitGoogle} className='boton'>Ingresa con Google </button>
        </form>
        </div>
    )
}

export default Login