import fs from "fs";

const PATH_INVENTORS = "./data/inventors.json";

// TODO: Leer todos
function getInventors() {
  return JSON.parse(fs.readFileSync(PATH_INVENTORS, "utf-8"));
}
// TODO: Leer por id
function getInventor(id) {
  return getInventors().find((inventor) => inventor._id == id);
}
// TOOD: Alta
function pushInventor(inventor) {
  let inventors = getInventors();
  inventors.push(inventor);
  fs.writeFileSync(PATH_INVENTORS, JSON.stringify(inventors, null, "  "));
}
// TODO: Modificación
function updateInventor(inventor) {
  let inventors = getInventors();
  const index = inventors.findIndex((inv) => inv._id == inventor._id);
  inventors[index] = inventor;
  fs.writeFileSync(PATH_INVENTORS, JSON.stringify(inventors, null, "  "));
}
// TOOD: Baja
function deleteInventor(id) {
  let inventors = getInventors();
  inventors.splice(
    inventors.findIndex((inventor) => inventor._id == id),
    1
  );
  fs.writeFileSync(PATH_INVENTORS, JSON.stringify(inventors, null, "  "));
}

export {
  getInventor,
  getInventors,
  pushInventor,
  updateInventor,
  deleteInventor,
};
