//TIPOS DE DATOS

//variables tipo numero 

if (true) {
    var m = 105;
}
console.log(m);7//Aqui se imprime lo que contiene la variable o el numero

let numero = 15
console.log(numero)//Aqui se imprime lo que contiene la variable o el numero


 //VARIABLE DE TIPO BOOLEANO 
 let valor1 = true
 console.log(valor1)

 let valor2 = false
console.log(valor2)

//VARIABLE TIPO CADENA DE TEXTO TIPO STRING
 let nombre = "kenser omar"
console.log(nombre)
 let apellidos = 'caal juc'
console.log(apellidos)

 // TIPOS DE DATOS NULO

 let dato1 = null
 let dato2 = null
 console.log(dato1)

 console.log(dato2)




 //TIPOS DE DATOS OBJETOS 
 let Curso = {
    materia : 'Ingenieria de Software',
    año : 2023,
    modulo: 'Numero II',
    mensaje: function (){
        alert("Esta es la materia de Programacion")
    }
}


console.log(Curso.materia);

console.log(Curso['año']);

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


//DESTRUCTURACION DE OBJETIVOS
const {año} = 2022;
const {modulo} = 'MODULO 2'

//CONCATENAR LAS VARIABLES
function resta (x,y){
    return x - y
}
 console.log('mi nombre es'+' ' + nombre + ' mi apellido es'+' ' + apellidos+ ' '+'tiempo de servicio '+ ' ' + resta(6,4))

console.log(tareas)
 console.log('el catedratico del curso es '+' ' + Curso.catedratico + ' el curso es'+' ' + Curso.materia+ ' '+'del año'+ Curso.año)



 

// metodos para objetos

let array1 = [10,9,8,7];
let array2 = [7,6,5,4,3];

conjunto = [...array1, ...array2];

console.log(conjunto)

let animales =['gallina, zorro, leon'];
let tipos = ['carnivoros, herbivoros'];

conjuntob = [...animales, ...tipos]

console.log(conjuntob)