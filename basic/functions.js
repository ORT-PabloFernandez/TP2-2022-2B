function add(a, b) {
  return a + b;
}

// valores por defecto en los parametros
function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + total * tax + total * tip;
}

// asignanda a una variable
const square = function (x) {
  return x * x;
};

square(5);

const person = {
  points: 2,
  score: function () {
    this.points++;
  },
};

person.score();
person.score();

console.log(person);

// Arrow Functions
const getSum = (a, b) => a + b;
const sqare1 = (x) => x * x;

const miarray = [4, 5, 6, 7];

miarray.forEach((x) => {
  console.log(x);
});
