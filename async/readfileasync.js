import fs from "fs";

const path = "./texto.txt";

fs.readFile(path, "utf-8", (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(error.message);
  }
});

console.log("Mientras se lee el archivo....");
