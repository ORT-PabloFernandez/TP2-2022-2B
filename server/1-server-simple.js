import http from "http";

http
  .createServer((req, res) => {
    res.writeHead(401, { "Content-Type": "text/html" });
    res.write("<h1>Hola mundo desde un servidor</h1>");
    res.end();
  })
  .listen(3000, "127.0.0.1", () => {
    console.log("Servidor Web escuchando el puerto 3000");
  });
