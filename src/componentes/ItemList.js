import Item from './Item';


const ItemList = ({ products }) => {
    return (
        <>
        <div className='divbienvenido'>
            <h1 className='textbienvenido'>Bienvenido</h1>
        </div>
        <div className='container container-fluid'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src='../imagenes/carrusel.png' className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="../imagenes/carrusel2.png" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="../imagenes/carrusel3.png" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            <div className='row itemlist'>
                {products.map (art => <Item key={art.id} {...art} /> )}
            </div>
        </div>
        </>
    )
}

export default ItemList