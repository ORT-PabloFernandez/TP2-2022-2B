// let vs var

var x = 1;
if (x === 1) {
  let x = 10;
  console.log(x);
}

var x = 100;

//x = 5;
console.log(x);

const FIELD_NOMBRE = "Nombre";

// si la variable que tengo que declarar no cambia, es mejor siempre declararla como const
