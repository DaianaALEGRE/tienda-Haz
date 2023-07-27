const misServicios = [
    { id: "1", nombre: "taller 1", precio: 12, stock: 5, img: "../img/tarot.jpg", idCat:"2" },
    { id: "2", nombre: "taller 2", precio: 15, stock: 10, img: "../img/tarot.jpg", idCat:"2" },
    { id: "3", nombre: "taller 3", precio: 10, stock: 10, img: "../img/tarot.jpg", idCat:"2" },
    { id: "4", nombre: "servicio 1", precio: 11, stock: 10, img: "../img/tarot.jpg", idCat:"1" },
    { id: "5", nombre: "servicio 2", precio: 1, stock: 10, img: "../img/tarot.jpg", idCat:"1" },
    { id: "6", nombre: "servicio 3", precio: 12, stock: 10, img: "../img/tarot.jpg", idCat:"1" },
]

export const getServicios = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misServicios);
        }, 2000)
    })
}


export const getUnServicio = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const servicios = misServicios.find(serv => serv.id === id);
            resolve(servicios)
        }, 100);

    })
}

export const getServiciosCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const ServiciosCategoria = misServicios.filter(serv => serv.idCat === idCategoria);
            resolve(ServiciosCategoria);
        }, 2000 )
    })
}
