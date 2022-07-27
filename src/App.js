import './App.css';
import * as bootstrap from 'bootstrap';
import Menu from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './componentes/CartContext';
import CartContenedor from './componentes/CartContainer'
import Checkout from './componentes/Checkout'
import Login from './componentes/Login';
import Ingreso from './componentes/Ingreso';
import Registro from './componentes/Registro';
import { ProtectedRoute } from './componentes/ProtectecRoute';


function App() {
  return (
    <div className="App">
    <CartProvider>
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={ <ItemListContainer/>}/>
        <Route path='/detail/:articuloId' element={ <ItemDetailContainer/>}/>
        <Route path='/categoria/:categoryId' element={ <ItemListContainer/> }/>
        <Route path='/carrito' element= { <CartContenedor/> } />
          <Route path='/checkout' element= { 
              <ProtectedRoute>
                <Checkout/> 
            </ProtectedRoute>
          } />
        <Route path='/ingreso' element={ <Ingreso/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}


export default App;
