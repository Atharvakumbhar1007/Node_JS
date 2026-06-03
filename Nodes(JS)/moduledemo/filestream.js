import fs from "node:fs";

const readStream = fs.createReadStream("demodata.txt");
const writeStream = fs.createWriteStream("demodata-copy.txt");

readStream.pipe(writeStream);//pipe is a method that takes the data from the read stream and writes it to the write stream. It handles the flow of data and backpressure automatically.

writeStream.on("finish", () => {
    console.log("File copy completed");
});
readStream.on("error", (err) => console.log("Read Error:", err.message));
writeStream.on("error", (err) => console.log("Write Error:", err.message));