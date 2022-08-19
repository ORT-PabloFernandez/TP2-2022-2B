const inventors = [
  { first: "Albert", last: "Einstein", year: 1879 },
  { first: "Isaac", last: "Newton", year: 1643 },
  { first: "Galileo", last: "Galilei", year: 1564 },
  { first: "Marie", last: "Curie", year: 1867 },
  { first: "Johannes", last: "Kepler", year: 1571 },
  { first: "Nicolaus", last: "Copernicus", year: 1473 },
  { first: "Max", last: "Planck", year: 1858 },
];

console.log(inventors);

inventors.forEach(function (inventor) {
  console.log(inventor.first + " " + inventor.last + " " + inventor.year);
});

const invetoresMayores = inventors.filter(function (inventor) {
  return inventor.year > 1800;
});

console.log(invetoresMayores);
