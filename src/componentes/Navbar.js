import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CarritoContext from './CartContext'

const Menu = () => {


  const {carrito,cantidad, logOut } = useContext(CarritoContext)
   
  const  manejarLogOut = async ()=>{
    await logOut()
  }
    return (
    <>
    <nav class="navbar navbar-expand-lg barramenu">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Tienda Avila</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 ">
          <li class="nav-item">
            <Link to='/'  class="nav-link active">Home</Link>
          </li>
          <li class="nav-item">
            <Link to='/categoria/NuevosProductos' class="nav-link active">Nuevos Productos</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Colecciones
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link to='/categoria/Basicos' class="nav-link active">Basicos</Link></li>
              <li><Link to='/categoria/Enteros' class="nav-link active">Enteros</Link></li>
              <li><Link to='/categoria/Niños' class="nav-link active">Niños</Link></li>
            </ul>
          </li>
          <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Buscar"></input>
          <button class="btn btn-outline-secondary" type="submit">Buscar</button>
          </form>
        </ul>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="material-symbols-outlined">exit_to_app </span>
              Login/logOut
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link to='/ingreso' class="nav-link active">Login</Link></li>
              <li><a class="dropdown-item nav-link active" onClick={manejarLogOut} >LogOut</a></li>
            </ul>
        </div>
      {carrito.length >0
          ? <div className=' d-flex botoncarrito' >
          <Link to='/carrito'><span class="material-symbols-outlined">shopping_cart {cantidad}</span></Link>        
          </div>
          : <> </>
      }
        
      </div>
    </div>
  </nav>
   
   </>
)}


export default Menu