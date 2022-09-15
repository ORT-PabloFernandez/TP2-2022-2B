// 1.- Leer inventors.json
// 2.- Insertar un invetor
// 3.- Actualizar el archivo (escritura)
// 4.- Leer la actualizacion del archivo
// 5.- Mostrar en consola

import { readFile } from "fs";
import fs from "fs/promises";

const path = "./inventors.json";

// 1.- Leer archivo
fs.readFile(path, "utf-8")
  .then((data) => {
    // 2.- Insertar un inventor
    const inventor = {
      _id: 13,
      first: "Pedro",
      last: "Casa",
      year: 2005,
    };
    const inventors = JSON.parse(data);
    inventors.push(inventor);
    // 3.- Escribir en el achivo
    return fs.writeFile(path, JSON.stringify(inventors, null, "  "));
  })
  .then(() => {
    // 4.- Leer la actualizacion del archivo
    return fs.readFile(path, "utf-8");
  })
  .then((data) => {
    // 5.- Mostar en consola.
    console.log(JSON.parse(data));
  })
  .catch((error) => {
    console.log(error.message);
  });
