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
    const {model} = Curso; 
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


console.log(tareas)

// metodos para objetos

let array1 = [10,9,8,7];
let array2 = [7,6,5,4,3];

conjunto = [...array1, ...array2];

console.log(conjunto)

let animales =['gallina, zorro, leon'];
let tipos = ['carnivoros, herbivoros'];

conjuntob = [...animales, ...tipos]

console.log(conjuntob)