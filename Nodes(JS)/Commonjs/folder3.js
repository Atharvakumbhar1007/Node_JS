const fs = require("fs/promises");
 export default async function removeFolder(){
    await fs.rmdir("Dummy");
    //only remove empty folder

    await fs.rm("logs", { recursive: true});
    //remove folder and all its content
 }