// para utilizar import, tiene que estar declarado como type: modulo (package.json)
import fs from "fs";

let data = fs.readFileSync("./data/texto.txt", "utf-8");

const saludo = "Hola Mundo!";

data += saludo;
fs.writeFileSync("./data/texto.txt", data);

data = fs.readFileSync("./data/texto.txt", "utf-8");
console.log(data);
