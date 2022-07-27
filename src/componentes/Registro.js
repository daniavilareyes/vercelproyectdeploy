import { useState } from "react"
import { useContext } from "react"
import CarritoContext from "./CartContext"
import { useNavigate } from "react-router-dom"
import { async } from "@firebase/util"


const Registro = () => {

    const { signup } = useContext(CarritoContext)
    const navigate = useNavigate(CarritoContext)

    const [error, setErrores] = useState('')

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleRegister = ({target : {name,value}}) =>{
        setUser({...user,[name]: value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
       
        try{
         await signup(user.email, user.password)  
            navigate('/')
        } catch (error) {
            setErrores(error.code)
            console.log(error)
        }
         
    }
    
    
    return(
        <div className="registro">
        {error && <p>{error}</p>}
        <p className="tituloreg"> Registro</p>
        <form onSubmit={handleSubmit} className='formularioingreso'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id="email" placeholder='youremail@company.com'
            onChange={handleRegister}/>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' id='password'
            onChange={handleRegister}/>
            <button className="boton">Registro</button>
        </form>
        </div>
    )
}

export default Registro