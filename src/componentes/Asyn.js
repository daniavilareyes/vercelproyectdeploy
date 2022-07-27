 const articulo = [
{id:"1",modelo:"Bianca",color:"Blanco",precio:4000,img:"../imagenes/tdb.jpg",category:"Basicos", stock: 20},
{id:"2",modelo:"Donatella",color:"Negro",precio:5500,img:"../imagenes/tdb2.jpg",category:"Basicos", stock: 20},
{id:"3",modelo:"Rainier",color:"Rojo",precio:5500,img:"../imagenes/tdb3.jpg",category:"NuevosProductos", stock: 20},
{id:"4",modelo:"Tiana",color:"Rosado",precio:4000,img:"../imagenes/tdb4.jpg",category:"NuevosProductos", stock: 20},
{id:"5",modelo:"Surfer",color:"Negro",precio:6500,img:"../imagenes/tdb5.jpg",category:"Enteros", stock: 20},
{id:"6",modelo:"Classic",color:"Bordo",precio:4500,img:"../imagenes/tdb6.jpg",category:"NuevosProductos", stock: 20},
{id:"7",modelo:"Basic",color:"Celeste",precio:4000,img:"../imagenes/tdb7.jpg",category:"Basicos", stock: 20},
{id:"8",modelo:"Anastasia",color:"Rosado",precio:6500,img:"../imagenes/tdb8.jpg",category:"Enteros", stock: 20}]

export const pedirRecursos = () => {
    return new Promise ((resolve, reject ) =>{
        setTimeout(() => {
            resolve(articulo)
        }, 1200)
    })
}

export const pedirRecursosById = (id) => {
    return new Promise ((resolve, reject ) =>{
        setTimeout(() => {
            resolve(articulo.find(art => art.id === id))
        }, 500)
    })
}

export const pedirRecursosByCategory = (categoryId) => {
    return new Promise ((resolve, reject ) => {
        setTimeout(()=>{
            resolve(articulo.filter(resp => resp.category === categoryId))
        }, 500)
    })
}

