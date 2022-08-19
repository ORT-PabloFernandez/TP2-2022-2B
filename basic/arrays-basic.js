// declaracion de arrays

let nombres = ["Juan", "Pedro", "Eduardo"];

const primer = nombres[0];
const ultimo = nombres[nombres.length - 1];

//console.log(ultimo);

// for (let i = 0; i < nombres.length; i++) {
//   const nombre = nombres[i];
//   console.log(nombre);
// }

for (const nombre of nombres) {
  console.log(nombre);
}

// modifican el objeto origen

// coloca al final
// COLAS y PILAS
nombres.push("Elena");

// sacar el del final
let ultimoNombre = nombres.pop();

// sacar del principio
let primerNombre = nombres.shift();

// coloca al principio
nombres.unshift("Anna");

// funciones que no modifican el origin
const i = nombres.indexOf("Anna");

let nuevoArray = nombres.slice();

// Ordenamiento
nombres.sort();

const numeros = [4, 7, 8, 2, 22, 11];
console.log(numeros.sort());

let stringNombres = "Juan;Pedro;Maria;Julian";
const nuevoNombres = stringNombres.split(";");

console.log(nuevoNombres);

const stringNumeros = numeros.join(",");
console.log(stringNumeros);
