import { useContext, useState } from "react";
import CarritoContext from "./CartContext";
import { getDocs, collection, query, where, addDoc, writeBatch, documentId } from 'firebase/firestore'
import { db }  from './servicios/firebase/index'
import Button from "./Boton";


const Checkout = () => {
    
    const {carrito,usuario, cantidad} = useContext(CarritoContext)
    const {precioTotal} = useContext(CarritoContext)
    const {vaciarCarrito} = useContext(CarritoContext)

    const total = precioTotal()

    const [loading, setLoading] = useState(false)
    const [ compraId, setCompraId ] = useState('')

    const [inputs, setInputs] = useState ({
        nombre: '',
        apellido: '',
        direccion: '',
      
    })

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs( values => ({...values, [name]: value}))
    }

    const [dataUsurioInput, setDataUsuarioInput ] = useState()

    const handleSubmit = (event) =>{
        event.preventDefault();
        setLoading(true)
        const datosCompra = {
            cliente:{
                nombre: (inputs.nombre),
                apellido: (inputs.apellido),
                direccion: (inputs.direccion),
            },
            items: carrito,
            total: total,

        }
        
        const batch = writeBatch(db)

        const carritoId = carrito.map (art => art.id)

        const outOfStock = []

        const collectionRef = collection (db, 'articulos')

        getDocs(query(collectionRef, where(documentId(), 'in', carritoId)))
        .then (response =>{
            response.docs.forEach( doc => {
                const dataDoc = doc.data()
                const product = carrito.find( product => product.id === doc.id)
                const productCantidad = product.cantidad 

                if (dataDoc.stock >= productCantidad){
                    batch.update(doc.ref, {stock: dataDoc.stock - productCantidad})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
        }).then(()=>{
            if (outOfStock.length === 0 ){
                const collectionRef = collection (db, 'ordenes')

               return addDoc(collectionRef, datosCompra)
            } else {
                return Promise.reject ({type: 'out_of_stock', products: outOfStock })
            }
        }).then (({ id }) => {

            batch.commit()
            setCompraId(id)
            setDataUsuarioInput(datosCompra.cliente)
            vaciarCarrito()
        }). catch(error => {
            if (error.type === ' out_of_stock'){
                <div> 
                    <h2>Lo sentimos, hay productos fuera de stock</h2>
                </div>
            } else {
                console.log (error)
            }
        }).finally(()=>{
            setLoading(false)
        })
        
    }

        if(loading){
            return (
                <div className="text-center">
                <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow"  style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                </div>
            )
        }
        


    return(
        <>
        { carrito.length !== 0 
        ? <div className= 'containerFormulario'>
            <h3 className="textcheckout">¡Falta poco!</h3>
        <form onSubmit={handleSubmit} className='formulariocheckout'>
      <label>Ingresa tu nombre:  </label>
      <input 
        type="text" 
        name="nombre" 
        value={inputs.nombre || ""} 
        onChange={handleChange}
        className='inputForm'
      />
    
      <label>Ingresa tu apellido: </label>
        <input 
          type="text" 
          name="apellido" 
          value={inputs.apellido || ""} 
          onChange={handleChange}
          className='inputForm'
        />
       
        <label>Ingresa tu direccion:</label>
        <input 
          type="text" 
          name="direccion" 
          value={inputs.direccion || ""} 
          onChange={handleChange}
          className='inputForm'
        />
        
       
        <div className="botoncheckout">
        <Button  label= 'Comprar'></Button>
         </div>
        
    </form>
    </div>

    :<div className="compraexitosacontainer">
            <h2 className="textcheckout"> ¡Compra exitosa!</h2>
            <table class="table tablacompraexitosa">
        <thead>
            <tr className='table-active'>
            <th scope="col"># Compra</th>
            <th scope="col">Nombre</th>
            <th scope="col">Direccion</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
           <tr className='table-light'>
            <th>{compraId}</th>
            <th>{dataUsurioInput.nombre || usuario.displayName}</th>
            <th>{dataUsurioInput.direccion}</th>
            <th>{usuario.email}</th>
           </tr>
        </tbody>
        </table>
        <p>Con este número de compra podrás hacer seguimiento de tu pedido</p>
    </div>
    }
    </>

    )
}

export default Checkout 