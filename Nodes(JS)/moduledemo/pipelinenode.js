import fs from "node:fs";
import zlib from "node:zlib";
import { pipeline } from "node:stream";

pipeline(
    fs.createReadStream("demodata.txt"),
    zlib.createGzip(), // Transform stream that compresses data using gzip
    fs.createWriteStream("demodata-copy.gz"),
    (err) => {
        if (err) {
            console.log("Pipeline Failed:", err);
        } else {
            console.log("File compressed");
        }
    }
);