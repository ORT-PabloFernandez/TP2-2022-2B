// TODO: generar una api que:

import fs from "fs/promises";
import express from "express";
import chalk from "chalk";

const PORT = 3000;
const app = express();
const PATH_USERS = "./data/users.json";

// TODO 2: GET/api/users todos los usuarios
app.get("/api/users", async (req, res) => {
  try {
    const usres = await fs.readFile(PATH_USERS, "utf-8");
  } catch (error) {
    res.send(`
              <html>
                  <head></head>
                  <body>
                      Error de lectura del archivo comple
                  </body>
                </html>
          `);
  }
  res.json(usres);
});

// TODO 3: GET/api/users/:id el usuario con id ("Object Id")
app.get("/api/users/:id", async (req, res) => {
  try {
    const usres = await fs.readFile(PATH_USERS, "utf-8");
    res.json(
      JSON.parse(usres).filter((user) => user["Object Id"] == req.params.id)
    );
  } catch (error) {
    res.send(`
              <html>
                  <head></head>
                  <body>
                      Error de lectura del archivo
                  </body>
                </html>
          `);
  }
});

// TODO 4: GET/api/users/country devolver todos los usuarios de country
app.get("/api/users/country/:country", async (req, res) => {
  try {
    const usres = await fs.readFile(PATH_USERS, "utf-8");
    res.json(
      JSON.parse(usres).filter(
        (user) => user["Country/Region"] == req.params.country
      )
    );
  } catch (error) {
    res.send(`
              <html>
                  <head></head>
                  <body>
                      Error de lectura del archivo
                  </body>
                </html>
          `);
  }
});

// TODO 5: GET/api/users/fields DisplayName, Title, Picture
app.get("/api/users/fields", async (req, res) => {
  console.log("estoy aca");
  try {
    const usres = await JSON.parse(fs.readFile(PATH_USERS, "utf-8"));
    let usuarios = null;
    usres.forEach((user) => {
      usuarios.push({
        "Display name": user["Display name"],
        Title: user.Title,
        Picture: user.Picture,
      });
      res.json(usuarios);
    });
  } catch (error) {
    res.send(`
                <html>
                    <head></head>
                    <body>
                        Error de lectura del archivo
                    </body>
                  </html>
            `);
  }
});

app.listen(PORT, () => {
  console.log(chalk.bgGreen.yellow("Servidor express en puerto:", PORT));
});
