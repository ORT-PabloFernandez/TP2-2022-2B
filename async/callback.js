// en JS se puede pasar una función como parametro,
//al momento de invocar la función se define la función o se envia una que ya existe
//callback, generalmente se llama a la función que se pasó como parametro a otro función

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

function saludoInventors(callbackSaludo) {
  for (const inventor of inventors) {
    callbackSaludo(inventor);
  }
}

saludoInventors((inventor) => console.log(`Hola ${inventor.first}`));
