import fs from "node:fs";
import zlib from "node:zlib";

const readStream = fs.createReadStream("demodata.txt");
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream("demodata-copy.txt");

readStream.pipe(gzip).pipe(writeStream);//pipe is a method that takes the data from the read stream and writes it to the write stream. It handles the flow of data and backpressure automatically.

writeStream.on("finish", () => {
    console.log("File compressed");
    const os = fs.statSync("demodata-copy.txt").size;
    const comp = fs.statSync("demodata.txt").size;
    const ratio = (os/comp).toFixed(2) * 100;

    console.log(`${os} bytes compressed to ${comp} bytes`);
    console.log(`File reduced by ${ratio}%`);
});
readStream.on("error", (err) => console.log("Read Error:", err.message));
writeStream.on("error", (err) => console.log("Write Error:", err.message));