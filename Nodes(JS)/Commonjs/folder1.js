const fs = require("fs/promises");
const { console } = require("inspector");

async function createDirs(){
    await fs.mkdir("logs");
    console.log("create folder logs");
    //path.join => data/user/profile
    // i want create all these folder at the same time
    await fs.mkdir(path.join("data", "user", "profile"), { recursive: true });
}
createDirs();

