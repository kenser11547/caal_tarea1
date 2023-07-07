//variables tipo numero 
if (true) {
    var m = 105;
}
console.log(m);
let numero = 15

console.log(numero)
 //variable tipo string 
 let nombre = "mi nombre es kenser omar"
console.log(nombre)
 let apellidos = 'caal juc'
console.log(apellidos)
 // tipo booleano

 let valor1 = true

 console.log(valor1)
 let valor2 = false
console.log(valor2)
 // dato nulo

 let dato1 = null
 let dato2 = null
 console.log(dato1)

 //objetos 
 let Curso = {
    materia : 'Ingenieria de Software',
    año : 2023,
    modulo: 'Numero II',
    mensaje: function (){
        alert("Esta es la materia de Programacion")
    }
}

Curso.tareas = 10
Curso.catedratico = 'Alferez de Navio Abner Fuentes'
let {materia, año, modulo, mensaje, tareas, catedratico} = Curso

console.log(materia)
console.log(año)
console.log(modulo)
console.log(mensaje)
console.log(tareas)
console.log(catedratico)

let tareashechas = [1,2,"calificadas"]


switch (modulo) {
    case 1:
        console.log("El modulo es I")

        break;
    case 2:
        console.log("El modulo es 2")

        break;

    default:
        break;
}


console.log(modulo)