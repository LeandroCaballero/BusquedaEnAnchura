let Nodo = require("./nodo")

class Grafo {

    constructor() {
        this.grafo = []
        this.hijos = []
    }

    addNode(nombre, padre, padre2) {
        let node = new Nodo(nombre, padre, padre2)
        this.grafo.push(node);
    }

    mostrar() {
        console.log(this.grafo)
    }

    getNode(index) {
        return this.grafo[index]
    }

    busquedaHijos(nodo) {
        let nombre = nodo.nombre
        for (let i = 0; i < this.grafo.length; i++) {
            let nodoActual = this.grafo[i]
            let padre = nodoActual.padre
            let padre2 = nodoActual.padre2
            if (nombre == padre || nombre == padre2) {
                this.hijos.push(nodoActual);
            }

        }
        return this.hijos
    }

}

module.exports = Grafo;