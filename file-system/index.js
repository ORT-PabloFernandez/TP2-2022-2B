import {
  getInventor,
  getInventors,
  pushInventor,
  updateInventor,
  deleteInventor,
} from "./crud.js";

import bcrypt from "bcrypt";

const password = bcrypt.hashSync("Holamundo", 8);

console.log(bcrypt.compareSync("Holamundo", password));

//console.log(deleteInventor(13));
