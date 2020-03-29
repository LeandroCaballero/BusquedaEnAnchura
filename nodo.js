class Nodo {
    constructor(nombre, padre, padre2) {
        this.nombre = nombre
        this.padre = padre
        this.padre2 = padre2

    }
    getNombre(){
        return this.nombre
    }
}

module.exports = Nodo;









// class Perro{
//     constructor(color, raza){
//         this.color = color
//         this.raza = raza
//     }

//     devolverDatos(){
//         console.log(this.color, this.raza)
//     }

//     darDeComer(comida){
//         this.alimento = comida

//     }
// }

// var perro = new Perro("blanco", "labrador")

// perro.devolverDatos()
// perro.darDeComer()
