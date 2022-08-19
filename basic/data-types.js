// Tipos de datos en javascript
// Number, String, Boolean, Symbol, Null, Undefined, Object
// Javascript es un lenguaje dinamico

// NUMBERS
let var1 = 0;
let var2 = -0;
let var3 = 1;
let var4 = -1;

// console.log("1/0= " + var3 / var2);
// console.log("Raiz cuadrada (-1): " + Math.sqrt(var4));

// STRING
let saludo = '"Hola "comilla" mundo"';
let saludo2 = "Hola mundo";
let caracter = "c";

let pizza = "🍕";

let saludo3 = `${saludo2} 
            quiero una 
                        ${pizza}`;

//console.log(saludo3);

// Null Data Type: Representa la ausencia de algun valor
let nulo = 45;
nulo = null;
// console.log(nulo);

// Undefined: una propiedad que no exite o una variable no asignada
let nodefinido;
// console.log(nodefinido);

// console.log(typeof saludo3);

// Parseos de numeros
let cadaNumero = "34";
// console.log(typeof (parseInt(cadaNumero) + 1));

// Objectos
// declaro un objeto

let user = {
  name: "Pablo Fernandez",
  email: "pablo.hinojosa@edu.or.ar",
};

// Acceso a las propiedades mediante notacion punto
console.log(`Nombre: ${user.name}`);

// Acceso a las propiedades mediante la notacion corchetes []
const propiedad = "email";
console.log(`Nombre: ${user[propiedad]}`);
