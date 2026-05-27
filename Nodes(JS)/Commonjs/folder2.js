const fs = require("fs/promises");
const path = require("path");

async function createFolder(){
    // . means current folder
    const items = await fs.readdir(".");
    console.log("Items in current folder:\n", items);

    const entries = await fs.readdir(".", { withFileTypes: true });
    console.log("------------------------------------------------");
    console.log(entries);

    for(const entry of entries){
        const type = entry.isDirectory() ? "Folder" : "File";
        console.log(`${entry.name}`);
    }
}
readFolder();