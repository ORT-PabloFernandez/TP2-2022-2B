// Cuando considera JS un valor como falso
// false, undefined, null, 0, NaN, '' (cadena vacia)

const error = {
  messsage: "Error al leer la base de datos",
};

if (!error) {
  // operaciones de escritura
} else {
  // en caso de error
}

try {
  // operaciones que en caso de error generan, una excepcion
} catch (error) {}

// (==) igualdad sin verificar tipo
// (===) verificando tipo y valor

// son iguales
console.log(null == undefined);
console.log(0 == false);
console.log("0== cadena vacia:", 0 == "");
console.log(null == undefined);

// no son iguales
console.log(0 == null);
console.log(0 == undefined);

console.log(null === undefined);
