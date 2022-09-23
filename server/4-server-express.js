import express from "express";
import chalk from "chalk";
const PORT = 3000;

const inventors = [
  {
    _id: 2,
    first: "Isaac",
    last: "Newton",
    year: 1643,
  },
  {
    _id: 3,
    first: "Galileo",
    last: "Galilei",
    year: 1564,
  },
  {
    _id: 4,
    first: "Marie",
    last: "Curie",
    year: 1867,
  },
  {
    _id: 5,
    first: "Johannes",
    last: "Kepler",
    year: 1571,
  },
  {
    _id: 6,
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
  },
  {
    _id: 7,
    first: "Max",
    last: "Planck",
    year: 1858,
  },
  {
    _id: 8,
    first: "Juan",
    last: "Perez",
    year: 1978,
  },
  {
    _id: 9,
    first: "Juan",
    last: "Perez",
    year: 1978,
  },
  {
    _id: 10,
    first: "René",
    last: "Favarolo",
    year: 1923,
  },
  {
    _id: 11,
    first: "Ladislao",
    last: "Biro",
    year: 1899,
  },
  {
    _id: 12,
    first: "Julian",
    last: "Alvarez",
    year: 2000,
  },
];

const app = express();

app.get("/", (req, res) => {
  res.send(`
                <html>
                    <head></head>
                    <body>
                        Bienvenido a la API de TP2
                    </body>
                </html>
            `);
});

app.get("/api/inventors", (req, res) => {
  res.json(inventors);
});

app.get("/api/inventors/:id", (req, res) => {
  res.json(
    inventors.filter((inventor) => inventor._id === parseInt(req.params.id))
  );
});

app.listen(PORT, () => {
  console.log(
    chalk.bgGreen.yellow("Servidor express levantado en el puerto:", PORT)
  );
});
