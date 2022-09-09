// setTimeout(() => {
//   console.log("Despues de 4 segundos");
//   setTimeout(() => {
//     console.log("Despues 6 segundos");
//   }, 2000);
// }, 4000);

let i = 0;

const timerid = setInterval(() => {
  console.log(`Hola mundo ${i}`);
  i++;
  if (i == 5) {
    clearInterval(timerid);
  }
}, 2000);

//console.log("Inmediatamente");
