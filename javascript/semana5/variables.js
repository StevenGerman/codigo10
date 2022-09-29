// * var
// * let
// * const

//* var: es una palabla reservada que nos permite declarar variables en javascript.
var n1 = 1; // Number
n1 = "hola"; // String
var n2 = 10; // Number
//! var ya no se usa
// var es global
// var es reasignable
// var es pesado
var n1 = true;

// Actualmente no es recomendable usar var

//* let: es una palabra reservada que nos permite declarar variables en javascript
// let solo funciona en el scope donde fue declarada

let nombre = "German"

nombre = 10;//cambiando el valor inicial
nombre = true;//cambiando el valor inicial
//nombre = null;//cambiando el valor inicial
//nombre = undefined;//cambiando el valor inicial

let nombre2 = "Juan";


console.log("Hola esta es una variable");
// true = 1
// false = 0
console.log(n1 + nombre);
console.log(nombre);



//* const: es una palabla reservada que nos permite declarar variables en javascript

// const solo funciona en el scope donde fue declarada
// const no se puede reasignar.

const nombre3 = "Linder"
// Esto no es posible con const porque una ves tena este un valor ya no se puede cambiar 
// A esto se le llama INMUTABILIDAD
nombre3 = "Pepe"; 




