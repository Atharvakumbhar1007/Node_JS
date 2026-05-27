const path = require("path");
const { config } = require("process");

const filePath = path.join("Users", "Atharva","documents","somefile.txt");
console.log(filePath);

const cleaned = path.join("Users", "\\Atharva\\", "../documents", "notes.txt");
console.log(cleaned);

const abs1 = path.resolve("data", "info.json");
console.log(abs1);

const abs2 = path.resolve("/temp","logs", "app.log");
console.log(abs2);
//on linux paths are /users/atharva/documents/notes.txt

console.log("Current folder / directory: ", __dirname, "config.json");
console.log("Config path:", configPath);

