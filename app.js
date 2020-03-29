let Grafo = require("./grafo")

let cont = 0
let objetivo = "E"
let exito = null
var b = new Grafo()

b.addNode("A", "-")
b.addNode("D", "A")
b.addNode("F", "A")
b.addNode("G", "A")
b.addNode("H", "D")
b.addNode("C", "D", "F")
b.addNode("E", "F")
b.addNode("K", "C")
b.addNode("B", "H", "K")
b.addNode("Z", "E")
b.addNode("W", "E")
//b.mostrar()

while(cont<11){
    if(exito==null){
        let hijos = b.busquedaHijos(b.getNode(cont))
        
        exito = hijos.find(item =>{
            return item.nombre == objetivo
        })

        console.log(hijos)
        console.log("_________________________________________________________________________________________")
        cont++
    }else{
        break
    }
    
}
