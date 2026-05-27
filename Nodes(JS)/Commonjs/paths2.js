const path = require("path");

const filepath = path.resolve("data", "info.json");
console.log(filepath);
console.log("Basename: ", path.basename(filepath));
console.log("Basename (no extension): ", path.basename(filepath, ".json"));
console.log("Directory name: ", path.dirname(filepath));
console.log("Extension: ", path.extname(filepath));

console.log(path.parse(filepath));
