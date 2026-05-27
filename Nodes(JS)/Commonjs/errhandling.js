const fs = require("fs/promises");

async function safeRead(){
    try{
        const myfile = await fs.readFile("myfile.txt", "utf8");
        console.log(myfile);
    } catch (err) {
        switch (err.code) {
            case "ENOENT":
                console.error("File not found");
                break;
            case "EACCES":
                console.error("Permission denied");
                break;
            case "EISDIR":
                console.error("Not a file");
                break;
            default:
                console.error("Unexpected error occurred");
        }
    }
}
safeRead();