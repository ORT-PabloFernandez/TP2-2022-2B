import fs from "fs";

let inventors = fs.readFileSync("./data/inventors.json", "utf-8");

inventors = JSON.parse(inventors);
inventors.push({ _id: 12, first: "Julian", last: "Alvarez", year: 2000 });

fs.writeFileSync("./data/inventors.json", JSON.stringify(inventors, null, " "));

console.log(inventors);
