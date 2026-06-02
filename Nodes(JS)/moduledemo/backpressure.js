import fs from "node:fs";

const writeStream = fs.createWriteStream("backpressure.txt",{
    highWaterMark: 1024 // how much to write per chunk
});

let i = 0;
const writes = 10000;

function writeData() {
    let isOk = true;
    while(i < writes && isOk) {
        i++;
        const data = `Entry ${i}, Some data written to file\n`;

        if(i == writes) {
            writeStream.end(data);
        }
        else{
            isOk = writeStream.write(data);
        }
    }

    if(i < writes){
        //once - means run once
        console.log("Drained");
        writeStream.once("drain", writeData);
    }
}
writeStream.on("finish", () => {
    console.log("Done");
});