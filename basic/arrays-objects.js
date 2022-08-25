const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

function printInventors(inventors) {
  console.log("Nombre        Apellido    Año");
  console.log("------------------------------");
  inventors.forEach((inventor) => {
    console.log(
      `${inventor.first.padEnd(12, " ")}${inventor.last.padEnd(12, " ")}${
        inventor.year
      } `
    );
  });
}

printInventors(inventors);

// Ejercicios
// 1.- filtrar los inventores nacidos antes del 1800
//  b) filtrar inventores cuyo nomnbre comienza con C

printInventors(inventors.filter((inventor) => inventor.year > 1800));

// Ejercicio 2: Convertir Apellido en mayusculas

printInventors(
  inventors.map((inventor) => ({
    first: inventor.first,
    last: inventor.last.toUpperCase(),
    year: inventor.year,
  }))
);

// Ejercicio 3: Combianacion de filtrado y map
printInventors(
  inventors
    .filter((inventor) => inventor.year > 1800)
    .map((inventor) => ({
      first: inventor.first,
      last: inventor.last.toUpperCase(),
      year: inventor.year,
    }))
);

// Ejercicio 4: Buscar el inventor Kepler y retornar el objeto
console.log(inventors.find((inventor) => inventor.last == "Kepler"));

// Ejercicio 5: Alguno de los inventores nacio en 1858?
console.log(inventors.some((inventor) => inventor.year === 1858));

// Ejercicio 6: Todos los invenores nacieron despues de 1500?
console.log(inventors.every((inventor) => inventor.year > 1500));

// Ejercicio 7: Ordenar los inventores por año de nacimiento
printInventors(inventors.sort((a, b) => b.year - a.year));

// Ejercicio 8: Ordenar los inventores por apellido

// Ejercicio 9: Convertir el array a un formato:
// [{
//    name: {first: 'first name', last: 'last name'}},
//    year: year
// }]
//
