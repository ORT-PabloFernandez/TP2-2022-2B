// Utilizando programación asyncrona

// 1.- Leer el archivo inventors.json
// 2.- Insertar un nuevo inventor, escribir en el archivo
// 3.- Leer de nuevo, con el nuevo inventor
// 4.- Eliminar el inventor que se insertó, y escribir en el archivo nuevamente
// 5.- Leer de nuevo el archivo, sin el el inventor

import fs from "fs";
import chalk from "chalk";
const PATH_INVENTORS = "./inventors.json";

let inventors = null;

fs.readFile(PATH_INVENTORS, "utf-8", (error, data) => {
  if (!error) {
    inventors = JSON.parse(data);
    inventors.push({ _id: 13, first: "Pablo", last: "Perez", year: 1643 });

    fs.writeFile(
      PATH_INVENTORS,
      JSON.stringify(inventors, null, "  "),
      (error) => {
        if (!error) {
          fs.readFile(PATH_INVENTORS, "utf-8", (error, data) => {
            if (!error) {
              inventors = JSON.parse(data);
              inventors.pop();
              fs.writeFile(
                PATH_INVENTORS,
                JSON.stringify(inventors, null, "  "),
                (error) => {
                  if (!error) {
                    fs.readFile(PATH_INVENTORS, "utf-8", (error, data) => {
                      console.log(JSON.parse(data));
                    });
                  } else {
                    console.log(chalk.red(error.message));
                  }
                }
              );
            }
          });
        } else {
          console.log(chalk.red(error.message));
        }
      }
    );
  } else {
    console.log(chalk.red(error.message));
  }
});
