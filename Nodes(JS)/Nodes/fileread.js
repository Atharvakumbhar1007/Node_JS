const fs = require("fs");

function myReadFile() {
    console.log("Before reading");
    const raw = fs.readFile("demo.txt", "utf-8",(err,data) => {
    if(err) {
        console.log("Error in reading file: ",err.message);
    } else {
        console.log(data);
    }
    }
    );
    console.log("After reading");
}

myReadFile();