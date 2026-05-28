const fs = require("fs/promises");
const {constants} = require("fs");

async function readIfExists(filepath){
    try {
        await fs.access(filepath, constants.F_OK);
        // Can I read the file?
        const data = await fs.readFile(filepath, "utf8");
        console.log(contant);
        }
        catch{
            console.log(" File not found or you do not have permission");
        }
    }
readIfExists("myfile.txt");
