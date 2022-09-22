// 1.- Leer inventors.json
// 2.- Insertar un invetor
// 3.- Actualizar el archivo (escritura)
// 4.- Leer la actualizacion del archivo
// 5.- Mostrar en consola

import fs from "fs/promises";
const path = "./inventors.json";

// 1.- Leactura
function getInventors() {
  return fs.readFile(path, "utf-8");
}

// 2.- Insertar
async function pushInventor(inventor, inventors) {
  inventors.push(inventor);
  await fs.writeFile(path, JSON.stringify(inventors, null, "  "));
}

const inventors = await getInventors();

await pushInventor(
  { _id: 13, first: "David4", last: "Terrasas4", year: 2006 },
  JSON.parse(inventors)
);

const inventors2 = await getInventors();
console.log("inventors2:", inventors2);
